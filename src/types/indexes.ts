export enum IndexQuoteCryptoCurrency {
  USDC = 'USDC',
  USDT = 'USDT',
}

export enum IndexQuoteFiatCurrency {
  USD = 'USD',
  EUR = 'EUR',
  CAD = 'CAD',
  GBP = 'GBP',
  CHF = 'CHF',
  AUD = 'AUD',
  JPY = 'JPY',
  ART = 'ART',
  BRL = 'BRL',
  CZK = 'CZK',
  IDRT = 'IDRT',
  MXN = 'MXN',
  PLN = 'PLN',
  RON = 'RON',
  TRY = 'TRY',
  UAH = 'UAH',
  ZAR = 'ZAR',
}

export const IndexQuoteCurrency = {
  ...IndexQuoteFiatCurrency,
  ...IndexQuoteCryptoCurrency,
};
