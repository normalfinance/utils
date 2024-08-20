export type DivestmentOrderIntent = {
  asset: string;
  amount: string;
};

export type InvestmentOrderIntent = { weight: string } & DivestmentOrderIntent;

export type OrderSummary = {
  asset: string;
  orderId: string;
  price: string;
  amount: string;
  usdValue: string;
  fee: string;
};
