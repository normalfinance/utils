import type { Exchange } from '../database';

// Base types
export type ExchangeBalance = {
  asset: string;
  amount: string;
};

export type PortfolioItem = ExchangeBalance & {
  currency: string;
  price: string;
  value: string;
  oneHourChange: string;
  oneDayChange: string;
  oneWeekChange: string;
  marketCap: string;
  allocation: string;
};
export type ExchangeDeposit = Record<string, any>;
export type ExchangePaymentMethod = Record<string, any>;
export type ExchangeOrder = {
  asset: string;
  orderId: string;
  side: string;
  amount: string;
  currency: string;
  value: string;
  price: string;
  fee: string;
  status: string;
  updatedAt: string;
  createdAt: string;
};

// Response types
export type GetExchangeDepositsResponse =
  | {
      error: string;
      deposits: undefined;
    }
  | {
      error: undefined;
      deposits: ExchangeDeposit[];
    };

export type GetExchangeOrdersResponse =
  | {
      error: string;
      orders: undefined;
    }
  | {
      error: undefined;
      orders: ExchangeOrder[];
    };

export type GetExchangePaymentMethodsResponse =
  | {
      error: string;
      paymentMethods: undefined;
    }
  | {
      error: undefined;
      paymentMethods: ExchangePaymentMethod[];
    };

export type BalanceInfo = {
  total: string;
  byExchange: Record<Exchange['id'], string>;
};

export type GetExchangePortfolioResponse =
  | {
      error: string;
      portfolio: undefined;
    }
  | {
      error: undefined;
      portfolio: PortfolioItem[];
    };
