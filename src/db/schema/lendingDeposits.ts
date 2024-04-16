import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { lendingProducts } from './lendingProducts';

export type LendingDeposit = typeof lendingDeposits.$inferSelect;
export type NewLendingDeposit = typeof lendingDeposits.$inferInsert;
export type LendingDepositWithProduct = InferResultType<
  'lendingDeposits',
  { product: true }
>;

export const lendingDeposits = pgTable('lendingDeposits', {
  id: serial('id').primaryKey(),
  lendingUserId: integer('lendingUserId').notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  lendingProductId: integer('lendingProductId').notNull(),
  stripePaymentId: varchar('stripePaymentId', { length: 50 }),
  stripeFee: decimal('stripeFee', { precision: 15, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const lendingDepositsRelations = relations(
  lendingDeposits,
  ({ one }) => ({
    product: one(lendingProducts, {
      fields: [lendingDeposits.lendingProductId],
      references: [lendingProducts.id],
    }),
  }),
);
