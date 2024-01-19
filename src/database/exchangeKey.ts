export type ExchangeKey = {
  userId: string; // Primary Key
  exchangeId: string; // Sory Key - Format <Exchange>:<Nickname> - Ex COINBASE:Personal
  apiKey: string; // Coinbase: API Key name
  apiSecret: string; // Coinbase: API private key
  apiPass?: string;
  version: ExchangeVersions;
  createdAt: number; // Unix Timestamp
  updatedAt: number; // Unix Timestamp
};

export enum Exchanges {
  BINANCE = 'BINANCE',
  BINANCE_US = 'BINANCE_US',
  BYBIT = 'BYBIT',
  COINBASE = 'COINBASE',
  OKX = 'OKX',
}

export enum RestrictedExchanges {
  BINANCE = 'BINANCE',
  BYBIT = 'BYBIT',
}

export enum ExchangeVersions {
  v1 = 'v1',
  v2 = 'v2',
}
