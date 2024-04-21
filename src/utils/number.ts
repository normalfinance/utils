import type Decimal from 'decimal.js';

/**
 * Example function that returns a greeting for the given name.
 *
 * @param usdValue - The name to greet.
 * @param price - The name to greet.
 * @returns The greeting.
 */
export const getRoundedCryptoQuantity = (usdValue: Decimal, price: Decimal) => {
  const quantity = usdValue.div(price);
  const decimals = (price.toString().split('.') as any)[0].length;
  return quantity.toFixed(decimals);
};
