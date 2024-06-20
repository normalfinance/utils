import Decimal from 'decimal.js';

import { STABLECOINS } from '../constants';
import type {
  Index,
  IndexWeight,
  NewIndexCriteria,
  NewIndexWeight,
  Token,
} from '../database';
import { IndexFee } from '../types/fee';

/**
 * Calculates the fee for an index investment.
 * @param monthlyVolume - The user's total investments for a given period of time.
 * @param investment - The new investment amount.
 * @returns The index fee for a new investment.
 */
export const calculateIndexFee = (
  monthlyVolume: Decimal,
  investment: Decimal,
): Decimal => {
  if (monthlyVolume.lessThanOrEqualTo(100_000)) {
    return investment.mul(IndexFee.Tier1);
  }
  if (monthlyVolume.lessThanOrEqualTo(500_000)) {
    return investment.mul(IndexFee.Tier2);
  }
  if (monthlyVolume.lessThanOrEqualTo(1_000_000)) {
    return investment.mul(IndexFee.Tier3);
  }
  return investment.mul(IndexFee.Tier4);
};

/**
 * Ordres a list of index weights by descending weight.
 * @param weights - A list of index weights.
 * @returns The ordered index weights.
 */
export const orderIndexWeightsByDescendingWeight = (weights: IndexWeight[]) =>
  weights.sort((a, b) => (a.weight < b.weight ? 1 : -1));

/**
 * Filters a list of Tokens by Index Criteria.
 * @param criteria - The criteria to select tokens by.
 * @param tokens - The list of tokens to filter.
 * @returns A list of filtered tokens.
 */
export const filterTokensByIndexCriteria = (
  criteria: NewIndexCriteria,
  tokens: Token[],
): Token[] => {
  const {
    topX,
    assets,
    whitelist,
    blacklist,
    includeStablecoins,
    minMarketCap,
    maxMarketCap,
  } = criteria;
  // TODO: update db schema to use string[] instead of string for these cols
  const criteriaAssets = assets?.split(',') ?? [];
  const criteriaWhitelist = whitelist?.split(',') ?? [];
  const criteriaBlacklist = blacklist?.split(',') ?? [];

  let filteredTokens: Token[] = [];

  // Top x by market cap
  if (topX) {
    const sortedByMarketCap = tokens.sort((a, b) =>
      new Decimal(a.marketCap).lessThan(b.marketCap) ? 1 : -1,
    );
    filteredTokens = sortedByMarketCap.slice(0, topX);
  }

  // Assets
  else if (criteriaAssets.length) {
    filteredTokens = tokens.filter((token) =>
      criteriaAssets.includes(token.asset),
    );
  }

  // Min and max market cap
  else if (minMarketCap && maxMarketCap) {
    filteredTokens = tokens.filter(
      (token) =>
        new Decimal(minMarketCap).lessThanOrEqualTo(token.marketCap) &&
        new Decimal(token.marketCap).lessThanOrEqualTo(maxMarketCap),
    );
  }

  // Minimum market cap
  else if (minMarketCap) {
    filteredTokens = tokens.filter((token) =>
      new Decimal(minMarketCap).lessThanOrEqualTo(token.marketCap),
    );
  }

  // Maximum market cap
  else if (maxMarketCap) {
    filteredTokens = tokens.filter((token) =>
      new Decimal(token.marketCap).lessThanOrEqualTo(maxMarketCap),
    );
  }

  // Whitelist assets
  if (criteriaWhitelist.length) {
    tokens.forEach((token) => {
      if (criteriaWhitelist.includes(token.asset)) {
        filteredTokens.push(token);
      }
    });
  }

  // Blacklist assets
  if (criteriaBlacklist.length) {
    filteredTokens = filteredTokens.filter(
      (token) => !criteriaBlacklist.includes(token.asset),
    );
  }

  // Stablecoins
  if (!includeStablecoins) {
    filteredTokens = filteredTokens.filter(
      (token) => !STABLECOINS.includes(token.asset),
    );
  }

  return filteredTokens;
};

/**
 * Takes in a list of tokens and returns a weight object based on market cap.
 * @param indexId - The index id.
 * @param tokens - Tokens to weight.
 * @param withSquareRoot - Flag to use square root weighting.
 * @param date - The date the weights are calculated for.
 * @returns The greeting.
 */
export const calculateWeightedMarketCapWeights = (
  indexId: Index['id'],
  tokens: Token[],
  withSquareRoot: boolean,
  date: string,
): NewIndexWeight[] => {
  // Calculate total and individual market caps
  let totalMarketCap = new Decimal(0);
  const marketCapByAsset: Record<string, Decimal> = {};

  tokens.forEach((token) => {
    let realMarketCap = new Decimal(token.marketCap);

    if (withSquareRoot) {
      realMarketCap = realMarketCap.squareRoot();
    }

    totalMarketCap = totalMarketCap.plus(realMarketCap);
    marketCapByAsset[token.asset] = realMarketCap;
  });

  return tokens.map((token) => {
    const marketCap = marketCapByAsset[token.asset];
    if (!marketCap) {
      throw new Error('No market cap found');
    }

    const weight = marketCap.div(totalMarketCap).toFixed(4);

    const newIndexWeights: NewIndexWeight = {
      indexId,
      asset: token.asset,
      weight,
      createdOn: date,
    };

    return newIndexWeights;
  });
};
