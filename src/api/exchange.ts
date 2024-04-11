import type Decimal from 'decimal.js';

import type { Exchange, Investment } from '../db/schema';
import type { AbstractOrder, AssetBalance, OrderSide } from '../order';

export type ExchangeDepositsResponse = {
  error: any | null;
  deposits: Record<string, any>[];
};

export type ExchangeOrdersResponse = {
  error: any | null;
  orders: AbstractOrder[];
};

export type ExchangePaymentMethodsResponse = {
  error: any | null;
  paymentMethods: Record<string, any>[];
};

export type PortfolioItem = AssetBalance & {
  price: Decimal;
  usdValue: Decimal;
  oneDayChange: Decimal;
  oneWeekChange: Decimal;
  allocation: Decimal;
};

export type ExchangePortfolioResponse = {
  error: any | null;
  portfolio: PortfolioItem[];
};

export type ExchangeOrder = {
  exchangeId: Exchange['id'];
  asset: string;
  currency: Investment['currency'];
  side: OrderSide;
  amount: Decimal;
};
