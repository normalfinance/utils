import type {
  IndexQuoteCryptoCurrency,
  IndexQuoteFiatCurrency,
} from '../indexes';
import type { OrderSide } from '../order';

export type NewSingleExchangeOrder = {
  exchangeId: string;
  asset: string;
  currency: IndexQuoteFiatCurrency | IndexQuoteCryptoCurrency;
  side: OrderSide;
  amount: string;
};

export type SingleExchangeOrder = {
  error: string | undefined;
  asset: string;
  orderId: string;
};
