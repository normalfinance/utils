import type {
  IndexQuoteCryptoCurrency,
  IndexQuoteFiatCurrency,
} from '../types';
import { IndexQuoteCurrency } from '../types';

/* eslint-disable @typescript-eslint/naming-convention */
export const ExchangeTradeMinimums = {
  binance: 5, // (https://www.binance.com/en/trade-rule)
  binance_us: 1, // (https://www.binance.us/trade-limits)
  bybit: 1, // (https://announcements.bybit.com/en-US/article/update-on-quantity-size-for-spot-pairs-nov-21-2022-blt4ea7edfe9d1bf7c5/)
  coinbase: 1, // (https://exchange.coinbase.com/markets)
  okx: 1, // (https://www.okx.com/trade-market/info/spot)
  kraken: 1, // (https://support.kraken.com/hc/en-us/articles/205893708-Minimum-order-size-volume-for-trading)
  gemini: 1, // Unknown
  kucoin: 0.1, // (https://www.kucoin.com/announcement/en-adjustment-of-minimum-spot-and-margin-trading-amountsƒ)
};

export const ExchangeSupportedFiats: Record<
  string,
  (IndexQuoteCryptoCurrency | IndexQuoteFiatCurrency)[]
> = {
  binance: [IndexQuoteCurrency.USDT],
  binance_us: [IndexQuoteCurrency.USDT],
  bybit: [IndexQuoteCurrency.USDT],
  coinbase: [
    IndexQuoteCurrency.USD,
    IndexQuoteCurrency.USDC,
    IndexQuoteCurrency.EUR,
    IndexQuoteCurrency.GBP,
  ],
  okx: [IndexQuoteCurrency.USDT, IndexQuoteCurrency.USDC],
  kraken: [
    IndexQuoteCurrency.USD,
    IndexQuoteCurrency.EUR,
    IndexQuoteCurrency.GBP,
    IndexQuoteCurrency.AUD,
    IndexQuoteCurrency.CAD,
    IndexQuoteCurrency.JPY,
    IndexQuoteCurrency.CHF,
    IndexQuoteCurrency.USDT,
    IndexQuoteCurrency.USDC,
  ],
  gemini: [
    IndexQuoteCurrency.USD,
    IndexQuoteCurrency.AUD,
    IndexQuoteCurrency.CAD,
    IndexQuoteCurrency.EUR,
    IndexQuoteCurrency.GBP,
  ],
  kucoin: [IndexQuoteCurrency.USDT],
};
