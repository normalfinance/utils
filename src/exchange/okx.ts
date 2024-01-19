export type OrderArgs = {
  instId: string;
  side: OrderSides;
  quantity: string;
};

export const enum OrderSides {
  BUY = 'buy',
  SELL = 'sell',
}

export type GetOrderArgs = {
  instId: string;
  ordId: string;
};

export type GetPriceArgs = {
  instId: string;
};

export type TransferArgs = {
  asset: string;
  amount: string;
  address: string;
  fee: string;
  chain?: string;
};
