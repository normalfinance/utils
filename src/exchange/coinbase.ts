/* eslint-disable camelcase */
export type AccountIdArg = {
  accountId: string;
};

export type GetDepositArgs = {
  accountId: string;
  depositId: string;
};

export type GetWithdrawalArgs = {
  accountId: string;
  withdrawalId: string;
};

export type FiatTransferArgs = {
  accountId: string;
  amount: string;
  currency: string;
  payment_method: string;
};

export type OrderArgs = {
  client_order_id: string; // Client set unique uuid for this order
  product_id: string; // e.g. 'BTC-USD'
  side: OrderSides; // UNKNOWN_ORDER_SIDE, BUY, SELL
  order_configuration: OrderConfiguration;
};

export const enum OrderSides {
  BUY = 'BUY',
  SELL = 'SELL',
}

export type OrderConfiguration = {
  market_market_ioc: OrderConfigurationMarketMarketIOC;
};

declare type OrderConfigurationMarketMarketIOC = {
  quote_size?: string; // Amount of quote currency to spend on order. Required for BUY orders.
  base_size?: string; // Amount of base currency to spend on order. Required for SELL orders
};

export type TransferCryptoArgs = {
  accountId: string;
  params: TransferCryptoParams;
};

declare type TransferCryptoParams = {
  type: 'send';
  to: string; // A blockchain address, or an email of the recipient
  amount: string; //  Amount to be sent
  currency: string; // Currency of the amount
  description: string; // Notes to be included in the email to the recipient
  idem: string; // A token to ensure idempotence. If a previous transaction with the same idem parameter exists for this sender, that previous transaction is returned and a new one is not created. Max length is 100 characters.
  destinationTag: string; // For select currencies, destination_tag or memo indicates the beneficiary or destination of a payment for select currencies.
};

export type SpotPriceArgs = {
  currencyPair: string;
};

export type GetOrderArgs = {
  orderId: string;
};
