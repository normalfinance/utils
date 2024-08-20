import type { AmountType } from '.';
import type {
  IndexQuoteCryptoCurrency,
  IndexQuoteFiatCurrency,
} from '../indexes';

export enum PriceType {
  BID = 'BID',
  ASK = 'ASK',
}

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum OrderType {
  MARKET = 'MARKET',
  LIMIT = 'LIMIT',
}

export enum OrderTimeInForce {
  GTC = 'GTC',
  IOC = 'IOC',
  GTD = 'GTD',
  FOK = 'FOK',
}

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
