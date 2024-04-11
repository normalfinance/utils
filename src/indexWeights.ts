import Decimal from 'decimal.js';

import type { IndexWeight, Token } from './db';

/**
 * Returns a weights object ordered by descending weight.
 *
 * @param weights - The weights to orders.
 * @returns The greeting.
 */
export const orderIndexWeights = (weights: IndexWeight[]) =>
  weights.sort((a, b) => (a.weight > b.weight ? 1 : -1));

/**
 * Takes in a list of tokens and returns a weight object based on market cap.
 *
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
