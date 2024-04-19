import type Decimal from 'decimal.js';

import type { Exchange, Investment } from '../db/schema';
import type { AbstractOrder, AssetBalance, OrderSide } from '../order';

export type ExchangeDeposits =
  | {
      error: string;
      deposits: undefined;
    }
  | {
      error: undefined;
      deposits: Record<string, any>[];
    };

export type ExchangeOrders =
  | {
      error: string;
      orders: undefined;
    }
  | {
      error: undefined;
      orders: AbstractOrder[];
    };

export type ExchangePaymentMethods =
  | {
      error: string;
      paymentMethods: undefined;
    }
  | {
      error: undefined;
      paymentMethods: Record<string, any>[];
    };

export type ExchangePortfolio =
  | {
      error: string;
      portfolio: undefined;
    }
  | {
      error: undefined;
      portfolio: PortfolioItem[];
    };

export type PortfolioItem = AssetBalance & {
  price: Decimal;
  usdValue: Decimal;
  oneDayChange: Decimal;
  oneWeekChange: Decimal;
  allocation: Decimal;
};

export type ExchangeOrder = {
  exchangeId: Exchange['id'];
  asset: string;
  currency: Investment['currency'];
  side: OrderSide;
  amount: Decimal;
};
