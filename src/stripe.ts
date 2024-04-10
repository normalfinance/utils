import type Decimal from 'decimal.js';

import { SubscriptionType, getIndexFeeTier } from './subscription';

export const calculateIndexFee = (
  annualRollingTotal: Decimal,
  newInvestment: Decimal,
) => newInvestment.mul(getIndexFeeTier(annualRollingTotal));

export const parsePlanNickname = (nickname: string): SubscriptionType => {
  if (nickname.toLowerCase() === SubscriptionType.PREMIUM) {
    return SubscriptionType.PREMIUM;
  }
  if (nickname.toLowerCase() === SubscriptionType.ADVANCED) {
    return SubscriptionType.ADVANCED;
  }
  return SubscriptionType.FREE;
};
