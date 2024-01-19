export type AbstractOrder = {
  exchangeId: string;
  asset: string;
  side: string;
  amount: string;
  usdValue: string;
  tradePrice: string;
  fee: string;
  status: string;
  updatedAt: string;
  createdAt: string;
};

export type AbstractBalance = {
  exchangeId: string;
  asset: string;
  amount: string;
};

export * as Binance from './binance';
export * as BinanceUs from './binanceUs';
export * as Bybit from './bybit';
export * as Coinbase from './coinbase';
export * as OKX from './okx';
