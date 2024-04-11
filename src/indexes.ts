import Decimal from 'decimal.js';

import { SubscriptionIndexFeeTierFee } from './subscription';

/**
 * Example function that returns a greeting for the given name.
 *
 * @param annualRollingTotal - The name to greet.
 * @returns The greeting.
 */
export const getIndexFeeTier = (annualRollingTotal: Decimal): Decimal => {
  if (annualRollingTotal.lessThanOrEqualTo(50_000)) {
    return new Decimal(SubscriptionIndexFeeTierFee.Tier1);
  }
  if (annualRollingTotal.lessThanOrEqualTo(500_000)) {
    return new Decimal(SubscriptionIndexFeeTierFee.Tier2);
  }
  if (annualRollingTotal.lessThanOrEqualTo(1_000_000)) {
    return new Decimal(SubscriptionIndexFeeTierFee.Tier3);
  }
  return new Decimal(SubscriptionIndexFeeTierFee.Tier4);
};

/**
 * Example function that returns a greeting for the given name.
 *
 * @param annualRollingTotal - The name to greet.
 * @param newInvestment - The name to greet.
 * @returns The greeting.
 */
export const calculateIndexFee = (
  annualRollingTotal: Decimal,
  newInvestment: Decimal,
) => newInvestment.mul(getIndexFeeTier(annualRollingTotal));
