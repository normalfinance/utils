import { ExchangeIndexQuoteCurrencies } from '../constants';
import type { Exchange } from '../database';

export const FeeAsset = 'SOL';

export const getFeeAddress = (exchangeType: Exchange['type']) =>
  exchangeType === 'coinbase'
    ? 'billing@normalfinance.io'
    : '7cbDHP5ksonpWJXmTWGsuD8yKVTxC4RfZ26JCYbSxRqX';

/**
 * Returns a base and quote asset from a non-delimited string.
 * @param exchangeType - The exchange the string came from.
 * @param symbol - The combined asset pair string.
 * @returns The base and quote assets.
 */
export const parseAssetsFromCombinedSymbol = (
  exchangeType: Exchange['type'],
  symbol: string,
): { baseAsset: string; quoteAsset: string } => {
  let baseAsset = symbol.toUpperCase();
  let quoteAsset = '';

  for (const currency in ExchangeIndexQuoteCurrencies[exchangeType]) {
    if (baseAsset.includes(currency)) {
      quoteAsset = currency;
      baseAsset = baseAsset.replace(currency, '');
    }
  }

  return { baseAsset, quoteAsset };
};
