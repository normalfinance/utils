import type { IndexQuoteFiatCurrency } from '../indexes';

export type NewExchangeFiatTransfer = {
  exchangeId: string;
  currency: IndexQuoteFiatCurrency;
  paymentMethodId: string;
  amount: string;
};
