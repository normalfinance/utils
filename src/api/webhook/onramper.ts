// (https://docs.onramper.com/docs/api-webhooks#validating-payloads-from-onramper)

export type OnramperWebhookEvent = {
  apiKey: string;
  country: string; // ISO 2 letter country code.
  inAmount: number;
  onramp: string;
  onrampTransactionId: string;
  outAmount: number;
  partnerContext: string; // PartnerContext once JSON.parse()
  paymentMethod: string;
  sourceCurrency: string;
  status: string;
  statusDate: string;
  targetCurrency: string;
  transactionHash: string;
  transactionId: string;
  transactionType: string;
  walletAddress: string;
};

export type OnramperPartnerContext = {
  userId: string;
  fundId: string;
};
