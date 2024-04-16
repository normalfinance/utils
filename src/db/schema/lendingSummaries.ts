import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { lendingProducts } from './lendingProducts';

export type LendingSummary = typeof lendingSummaries.$inferSelect;
export type NewLendingSummary = typeof lendingSummaries.$inferInsert;
export type LendingSummaryWithProduct = InferResultType<
  'lendingSummaries',
  { product: true }
>;

export const lendingSummaries = pgTable('lendingSummaries', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  lendingProductId: integer('lendingProductId').notNull(),
  positionId: varchar('positionId', { length: 30 }).notNull(),
  supply: decimal('supply', { precision: 15, scale: 2 }).notNull(),
  reward: decimal('ferewarde', { precision: 15, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const lendingSummariesRelations = relations(
  lendingSummaries,
  ({ one }) => ({
    product: one(lendingProducts, {
      fields: [lendingSummaries.lendingProductId],
      references: [lendingProducts.id],
    }),
  }),
);
