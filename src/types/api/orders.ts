import type { AmountType } from '.';
import type {
  IndexQuoteCryptoCurrency,
  IndexQuoteFiatCurrency,
} from '../indexes';

export type PriceSide = 'BID' | 'ASK';
export type OrderSide = 'BUY' | 'SELL';
export type OrderType =
  | 'MARKET'
  | 'LIMIT'
  | 'TAKE_PROFIT'
  | 'STOP_LOSS'
  | 'BRACKET';
export type OrderTimeInForce = 'GTC' | 'IOC' | 'GTD' | 'FOK';

export type NewSingleExchangeOrder = {
  exchangeId: string;
  asset: string;
  currency: IndexQuoteFiatCurrency | IndexQuoteCryptoCurrency;
  side: OrderSide;
  type: OrderType;
  amount: string;
  amountType: AmountType;
  postOnly: boolean;
  timeInForce: OrderTimeInForce;
  price?: string;
};

export type SingleExchangeOrder = {
  error: string | undefined;
  asset: string;
  orderId: string;
};
