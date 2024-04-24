import Decimal from 'decimal.js';

import { STABLECOINS } from '../constants';
import type {
  Index,
  IndexWeight,
  NewIndexCriteria,
  NewIndexWeight,
  Token,
} from '../database';
import { IndexFee } from '../types/subscription';

/**
 * Calculates the fee for an index investment.
 * @param rollingTotal - The user's total investments for a given period of time.
 * @param investment - The new investment amount.
 * @returns The index fee for a new investment.
 */
export const calculateIndexFee = (
  rollingTotal: Decimal,
  investment: Decimal,
): Decimal => {
  if (rollingTotal.lessThanOrEqualTo(50_000)) {
    return investment.mul(IndexFee.Tier1);
  }
  if (rollingTotal.lessThanOrEqualTo(500_000)) {
    return investment.mul(IndexFee.Tier2);
  }
  if (rollingTotal.lessThanOrEqualTo(1_000_000)) {
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

  let filteredTokens: Token[] = [];

  if (topX) {
    const sortedByMarketCap = tokens.sort((a, b) =>
      a.marketCap < b.marketCap ? 1 : -1,
    );
    filteredTokens = sortedByMarketCap.slice(0, topX);
  } else if (assets) {
    filteredTokens = tokens.filter((token) => assets.includes(token.asset));
  } else if (minMarketCap && maxMarketCap) {
    filteredTokens = tokens.filter(
      (token) =>
        new Decimal(minMarketCap).lessThanOrEqualTo(token.marketCap) &&
        new Decimal(token.marketCap).lessThanOrEqualTo(maxMarketCap),
    );
  } else if (minMarketCap) {
    filteredTokens = tokens.filter((token) =>
      new Decimal(minMarketCap).lessThanOrEqualTo(token.marketCap),
    );
  } else if (maxMarketCap) {
    filteredTokens = tokens.filter((token) =>
      new Decimal(token.marketCap).lessThanOrEqualTo(maxMarketCap),
    );
  }

  if (whitelist) {
    tokens.forEach((token) => {
      if (whitelist.includes(token.asset)) {
        filteredTokens.push(token);
      }
    });
  }

  if (blacklist) {
    filteredTokens = filteredTokens.filter(
      (token) => !blacklist.includes(token.asset),
    );
  }

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
 * @returns The greeting.
 */
export const calculateWeightedMarketCapWeights = (
  indexId: Index['id'],
  tokens: Token[],
  withSquareRoot: boolean,
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
      createdOn: new Date().toJSON().slice(0, 10),
    };

    return newIndexWeights;
  });
};
