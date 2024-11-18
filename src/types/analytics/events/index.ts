import type { AuthEventName } from './auth';
import type { BillingEventName } from './billing';
import type { ExchangeEventName } from './exchange';
import type { IndexEventName } from './indexes';
import type { InvestmentEventName } from './investment';
import type { NotificationEventName } from './notification';
import type { ReferralEventName } from './referral';
import type { ScheduleEventName } from './schedule';

export * from './auth';
export * from './billing';
export * from './exchange';
export * from './indexes';
export * from './investment';
export * from './notification';
export * from './referral';
export * from './schedule';

export type AnalyticsEventName =
  | AuthEventName
  | BillingEventName
  | IndexEventName
  | ExchangeEventName
  | NotificationEventName
  | ReferralEventName
  | InvestmentEventName
  | ScheduleEventName;
