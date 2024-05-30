import type { AuthEventName } from './auth';
import type { BillingEventName } from './billing';
import type { DivestmentEventName } from './divestment';
import type { ExchangeEventName } from './exchange';
import type { GiftEventName } from './gift';
import type { IndexEventName } from './indexes';
import type { InvestmentEventName } from './investment';
import type { LendingEventName } from './lending';
import type { ReferralEventName } from './referral';
import type { ScheduleEventName } from './schedule';

export * from './auth';
export * from './billing';
export * from './divestment';
export * from './exchange';
export * from './gift';
export * from './indexes';
export * from './investment';
export * from './lending';
export * from './referral';
export * from './schedule';

export type AnalyticsEventName =
  | AuthEventName
  | BillingEventName
  | IndexEventName
  | ExchangeEventName
  | LendingEventName
  | ReferralEventName
  | GiftEventName
  | InvestmentEventName
  | DivestmentEventName
  | ScheduleEventName;
