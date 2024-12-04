import type { AmountType } from '.';
import type {
  IndexQuoteCryptoCurrency,
  IndexQuoteFiatCurrency,
} from '../indexes';

export enum PriceType {
  Bid = 'BID',
  Ask = 'ASK',
}

export enum OrderSide {
  Buy = 'BUY',
  Sell = 'SELL',
}

export enum OrderType {
  Market = 'MARKET',
  Limit = 'LIMIT',
  TakeProfit = 'TAKE_PROFIT',
  StopLoss = 'STOP_LOSS',
  Bracket = 'BRACKET',
}

export enum OrderTimeInForce {
  Gtc = 'GTC',
  Ioc = 'IOC',
  Gtd = 'GTD',
  Fok = 'FOK',
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
