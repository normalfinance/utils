export type Investment = {
  userId: string; // Primary Key
  id: string; // Sort Key - hash(YYYY-MM-DD:indexId:exchangeId:amount:currency:strict)
  exchangeId: string;
  indexId: string;
  amount: string;
  currency: InvestmentCurrency;
  strict: boolean; // only execute if all assets can be purchased
  orderIds: string[];
  createdAt: number; // Unix Timestamp
  updatedAt: number; // Unix Timestamp
};

export enum InvestmentCurrency {
  USD = 'USD',
  USDT = 'USDT',
}

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}
