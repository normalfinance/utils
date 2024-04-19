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
import { lenders } from './lender';
import { lendingProducts } from './lendingProducts';

export type LendingDeposit = typeof lendingDeposits.$inferSelect;
export type NewLendingDeposit = typeof lendingDeposits.$inferInsert;
export type LendingDepositWithProduct = InferResultType<
  'lendingDeposits',
  { product: true }
>;

export const lendingDeposits = pgTable('lendingDeposits', {
  id: serial('id').primaryKey(),
  lenderId: integer('lenderId').notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  productId: integer('productId').notNull(),
  stripePaymentId: varchar('stripePaymentId', { length: 50 }),
  stripeFee: decimal('stripeFee', { precision: 15, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const lendingDepositsRelations = relations(
  lendingDeposits,
  ({ one }) => ({
    lender: one(lenders, {
      fields: [lendingDeposits.lenderId],
      references: [lenders.id],
    }),
    product: one(lendingProducts, {
      fields: [lendingDeposits.productId],
      references: [lendingProducts.id],
    }),
  }),
);
