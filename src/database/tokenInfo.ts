import { CoinMarketCapQuote } from '../api/coinMarketCap';

export type TokenInfo = {
  date: string; // Primary Key - YYYY-MM-DD
  time: string; // Sort key - HH:MM
  info: Record<string, CoinMarketCapQuote>; // (https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest)
};
