// Modules
import type Decimal from 'decimal.js';

export const EXCHANGE_TRADE_MINIMUMS: Record<string, number> = {
  BINANCE: 5, // (https://www.binance.com/en/trade-rule)
  BINANCE_US: 1, // (https://www.binance.us/trade-limits)
  BYBIT: 1, // (https://announcements.bybit.com/en-US/article/update-on-quantity-size-for-spot-pairs-nov-21-2022-blt4ea7edfe9d1bf7c5/)
  COINBASE: 1, // (https://exchange.coinbase.com/markets)
  OKX: 1, // (https://www.okx.com/trade-market/info/spot)
};

export const STABLECOINS = [
  'USDC',
  'USDT',
  'DAI',
  'LUSD',
  'FDUSD',
  'TUSD',
  'USDD',
  'USDP',
  'PYUSD',
  'FRAX',
];

export const BLACKLIST = [
  'BUSD',
  'WBTC',
  'KRD',
  'WTRX',
  'WHBAR',
  'WBETH',
  'STETH',
  'BTCB',
  'RETH',
  'MSOL',
  '1000SATS',
  'ETHDYDX',
  'LUNC',
];

/**
 * Example function that returns a greeting for the given name.
 *
 * @param usdValue - The name to greet.
 * @param price - The name to greet.
 * @returns The greeting.
 */
export const getRoundedCryptoQuantity = (usdValue: Decimal, price: Decimal) => {
  const quantity = usdValue.div(price);
  const decimals = (price.toString().split('.') as any)[0].length;
  return quantity.toFixed(decimals);
};
