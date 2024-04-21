import type Decimal from 'decimal.js';

import type { Exchange } from '../database/schema/exchanges';

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export type DivestmentOrderIntent = {
  asset: string;
  amount: Decimal;
};

export type InvestmentOrderIntent = { weight: Decimal } & DivestmentOrderIntent;

export type OrderSummary = {
  asset: string;
  orderId: string;
  price: Decimal;
  amount: Decimal;
  usdValue: Decimal;
  fee: Decimal;
};

export type AbstractOrder = {
  exchangeId: Exchange['id'];
  asset: string;
  orderId: string;
  side: string;
  amount: Decimal;
  usdValue: Decimal;
  tradePrice: Decimal;
  fee: Decimal;
  status: string;
  updatedAt: string;
  createdAt: string;
};

export type AssetBalance = {
  asset: string;
  amount: Decimal;
};
