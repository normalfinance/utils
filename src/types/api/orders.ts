import type { Investment } from '../../database';
import type { OrderSide } from '../order';

export type NewSingleExchangeOrder = {
  exchangeId: string;
  asset: string;
  currency: Investment['currency'];
  side: OrderSide;
  amount: string;
};

export type SingleExchangeOrder = {
  error: string | undefined;
  asset: string;
  orderId: string;
};
