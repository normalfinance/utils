import type { SanitizedExchange } from '../database';

// Base units
export type ExchangeBalance = {
  asset: string;
  amount: string;
};
export type PortfolioItem = ExchangeBalance & {
  price: string;
  usdValue: string;
  oneDayChange: string;
  oneWeekChange: string;
  allocation: string;
};
export type ExchangeDeposit = Record<string, any>;
export type ExchangePaymentMethod = Record<string, any>;
export type ExchangeOrder = {
  asset: string;
  orderId: string;
  side: string;
  amount: string;
  usdValue: string;
  price: string;
  fee: string;
  status: string;
  updatedAt: string;
  createdAt: string;
};

// Responses
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
      data: undefined;
    }
  | {
      error: undefined;
      data: {
        exchanges: SanitizedExchange[];
        orders: ExchangeOrder[];
      };
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

export type GetExchangePortfolioResponse =
  | {
      error: string;
      portfolio: undefined;
    }
  | {
      error: undefined;
      portfolio: PortfolioItem[];
    };
