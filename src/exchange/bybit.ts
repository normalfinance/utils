export type OrderArgs = {
  currencyPair: string;
  side: OrderSides;
  quantity: string;
};

export const enum OrderSides {
  BUY = 'Buy',
  SELL = 'Sell',
}

export type GetOrderArgs = {
  orderId: string;
};

export type GetPriceArgs = {
  symbol: string;
};

export type TransferArgs = {
  coin: string;
  chain: string;
  address: string;
  amount: string;
  timestamp: number;
};
