export type InvestmentOrderIntent = {
  weight: string;
  asset: string;
  amount: string;
};

export type OrderSummary = {
  asset: string;
  orderId: string;
  price: string;
  amount: string;
  usdValue: string;
  fee: string;
};
