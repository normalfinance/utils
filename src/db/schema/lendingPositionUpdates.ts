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

import { lendingProducts } from './lendingProducts';

export type LendingPositionUpdate = typeof lendingPositionUpdates.$inferSelect;
export type NewLendingPositionUpdate =
  typeof lendingPositionUpdates.$inferInsert;

export const lendingPositionUpdates = pgTable('lendingPositionUpdates', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  lendingProductId: integer('lendingProductId').notNull(),
  positionId: varchar('positionId', { length: 30 }),
  type: varchar('type', { length: 256 }).notNull(),
  trxHash: char('trxHash', { length: 42 }),
  fee: decimal('fee', { precision: 15, scale: 2 }),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const lendingPositionUpdatesRelations = relations(
  lendingPositionUpdates,
  ({ one }) => ({
    product: one(lendingProducts, {
      fields: [lendingPositionUpdates.lendingProductId],
      references: [lendingProducts.id],
    }),
  }),
);
