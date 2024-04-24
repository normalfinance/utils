export type NewExchangeDeposit = {
  exchangeId: string;
  amount: string;
  currency: 'USD' | 'USDC';
  paymentMethodId: string;
};
