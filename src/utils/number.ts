// eslint-disable-next-line import-x/no-named-as-default, @typescript-eslint/naming-convention
import type Decimal from 'decimal.js';

/**
 * Example function that returns a greeting for the given name.
 *
 * @param usdValue - The name to greet.
 * @param price - The name to greet.
 * @returns The greeting.
 */
export const getRoundedCryptoQuantity = (
  usdValue: Decimal,
  price: Decimal,
): string => {
  const quantity = usdValue.div(price);
  const decimals = (price.toString().split('.') as any)[0].length;
  return quantity.toFixed(decimals);
};
