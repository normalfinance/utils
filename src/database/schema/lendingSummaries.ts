import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
import { lenders } from './lender';
import { lendingProducts } from './lendingProducts';

export type LendingSummary = typeof lendingSummaries.$inferSelect;
export type NewLendingSummary = typeof lendingSummaries.$inferInsert;
export type LendingSummaryWithProduct = InferResultType<
  'lendingSummaries',
  { product: true }
>;

export const lendingSummaries = pgTable('lendingSummaries', {
  id: serial('id').primaryKey(),
  lenderId: integer('lenderId').notNull(),
  productId: integer('productId').notNull(),
  positionId: varchar('positionId', { length: 30 }).notNull(),
  supply: decimal('supply', { precision: 15, scale: 2 }).notNull(),
  reward: decimal('reward', { precision: 15, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const lendingSummariesRelations = relations(
  lendingSummaries,
  ({ one }) => ({
    lender: one(lenders, {
      fields: [lendingSummaries.lenderId],
      references: [lenders.id],
    }),
    product: one(lendingProducts, {
      fields: [lendingSummaries.productId],
      references: [lendingProducts.id],
    }),
  }),
);
