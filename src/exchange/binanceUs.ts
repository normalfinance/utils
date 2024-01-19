export type OrderArgs = {
  symbol: string; // BTCUSDT
  side: OrderSides;
  type: 'MARKET';
  quantity: number;
  newClientOrderId?: string;
};

export const enum OrderSides {
  BUY = 'BUY',
  SELL = 'SELL',
}

export type GetOrderArgs = {
  symbol: string; // BTCUSDT
  orderId: string;
};

export type GetAllOrdersArgs = {
  symbol: string; // BTCUSDT
};

export type GetPriceArgs = {
  symbol: string;
};

export type TransferArgs = {
  coin: string;
  network: string;
  withdrawOrderId: string;
  address: string;
  addressTag?: string;
  amount: number;
};
