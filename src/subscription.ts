import { LiveIndexIds } from './database';

export const FREE_PLAN_MAX_FREE_FEES = 10;

export enum NormalPlanType {
  FREE = 'free',
  PREMIUM = 'premium',
  ADVANCED = 'advanced',
}

export type Limits = {
  exchanges: ExchangeLimits;
  indexes: IndexLimits;
  lending: LendingLimits;
};

export type ExchangeLimits = {
  maxExchanges: number;
  maxAccountsPerExchange: number;
};

export type CustomIndexLimits = {
  enabled: boolean;
  public: boolean;
  max: number;
};

export type IndexLimits = {
  enabledIndexes: LiveIndexIds[];
  customIndexes: CustomIndexLimits;
};

export type LendingLimits = {
  apy: string;
};

export type Fees = {
  index: number;
  lending: number;
};

export type NormalPlan = {
  subscription: NormalPlanType;
  paymentLink: string;
  price: number;
  limits: Limits;
  fees: Fees;
  referralBonus: number;
  extras: string;
};
