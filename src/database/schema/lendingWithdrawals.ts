import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import { lenders } from './lender';
import { lendingProducts } from './lendingProducts';
import type { InferResultType } from '../../types/database/helpers';

export type LendingWithdrawal = typeof lendingWithdrawals.$inferSelect;
export type NewLendingWithdrawal = typeof lendingWithdrawals.$inferInsert;
export type LendingWithdrawalWithProduct = InferResultType<
  'lendingWithdrawals',
  { product: true }
>;

export const lendingWithdrawals = pgTable('lendingWithdrawals', {
  id: serial('id').primaryKey(),
  lenderId: integer('lenderId').notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  productId: integer('productId').notNull(),
  via: varchar('via', { length: 50 }).notNull(),
  viaId: varchar('viaId', { length: 256 }).notNull(),
  commission: decimal('commission', { precision: 15, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const lendingWithdrawalsRelations = relations(
  lendingWithdrawals,
  ({ one }) => ({
    lender: one(lenders, {
      fields: [lendingWithdrawals.lenderId],
      references: [lenders.id],
    }),
    product: one(lendingProducts, {
      fields: [lendingWithdrawals.productId],
      references: [lendingProducts.id],
    }),
  }),
);
