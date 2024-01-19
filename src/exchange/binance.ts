export type OrderArgs = {
  currencyPair: string;
  side: OrderSides;
  price: string;
  quantity: number;
};

export const enum OrderSides {
  BUY = 'BUY',
  SELL = 'SELL',
}

export type GetOrderArgs = {
  currencyPair: string;
  orderId: string;
};

export type GetAllOrdersArgs = {
  currencyPair: string;
};

export type GetPriceArgs = {
  currencyPair: string;
};

export type TransferArgs = {
  asset: string;
  address: string;
  amount: number;
  optional: TransferOptionalArgs;
};

export type TransferOptionalArgs = {
  withdrawOrderId?: string;
  network?: string;
  addressTag?: string;
  name?: string;
};
