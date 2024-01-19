export * from './_Index';
export * from './exchangeKey';
export * from './feeSummary';
export * from './investment';
export * from './positions';
export * from './referral';
export * from './tokenInfo';

export const enum TABLES {
  INDEX = 'INDEX',
  EXCHANGE_KEY = 'EXCHANGE_KEY',
  INVESTMENT = 'INVESTMENT',
  FEE_SUMMARY = 'FEE_SUMMARY',
  POSITIONS = 'POSITIONS',
  REFERRAL = 'REFERRAL',
  TOKEN_INFO = 'TOKEN_INFO',
}
