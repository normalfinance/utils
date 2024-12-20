// eslint-disable-next-line import-x/no-nodejs-modules
import { createHash } from 'crypto';

import type { NewInvestment } from '../database';

export const IdempotencyAlgorithm = 'md5'; // or sha256

/**
 * Creates a MD5 hash of some data.
 *
 * @param args - A list of args ot include in the idem key.
 * @returns The idempotency key.
 */
export const createIdempotencyKey = (args: (string | number)[]): string =>
  createHash(IdempotencyAlgorithm).update(args.join(':')).digest('hex');

/**
 * Creates an idempotency key for an order.
 *
 * @param asset - The asset being traded.
 * @param amount - The amount to order.
 * @param context - A custom context the transfer is being executed in.
 * @returns The idempotency key.
 */
export const createOrderIdempotencyKey = (
  asset: string,
  amount: string,
  context?: string,
): string => {
  if (!context) {
    return createIdempotencyKey([
      new Date().toJSON().slice(0, 10),
      asset,
      amount,
    ]);
  }
  return createIdempotencyKey([asset, amount, context]);
};

/**
 * Creates an idempotency key for a transfer.
 *
 * @param asset - The asset being transferred.
 * @param to - The recipient address.
 * @param amount - The amount to transfer.
 * @param context - A custom context the transfer is being executed in.
 * @returns The idempotency key.
 */
export const createTransferIdempotencyKey = (
  asset: string,
  to: string,
  amount: string,
  context?: string,
): string => {
  if (!context) {
    return createIdempotencyKey([
      new Date().toJSON().slice(0, 10),
      asset,
      to,
      amount,
    ]);
  }
  return createIdempotencyKey([asset, to, amount, context]);
};

/**
 * Creates an idempotency key for an investment.
 *
 * @param investment - The investment.
 * @returns The idempotency key.
 */
export const createInvestmentIdempotencyKey = (
  investment: NewInvestment,
): string =>
  createIdempotencyKey([
    new Date().toJSON().slice(0, 10),
    investment.indexId,
    investment.exchangeId,
    investment.amount,
    investment.currency,
  ]);
