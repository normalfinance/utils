import Decimal from 'decimal.js';

import type { IndexWeight, Token } from '../database';
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
 * Takes in a list of tokens and returns a weight object based on market cap.
 * @param tokens - Tokens to weight.
 * @param withSquareRoot - Flag to use square root weighting.
 * @returns The greeting.
 */
export const calculateWeightedMarketCapWeights = (
  tokens: Token[],
  withSquareRoot: boolean,
) => {
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

  // Calculate weights
  const weightByAsset: Record<string, Decimal> = {};

  tokens.forEach((token) => {
    const mcap = marketCapByAsset[token.asset];
    if (!mcap) {
      throw new Error('No market cap');
    }
    weightByAsset[token.asset] = mcap.div(totalMarketCap);
  });

  return weightByAsset;
};
