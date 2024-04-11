import {
  integer,
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

export type LendingSummary = typeof lendingSummaries.$inferSelect;
export type NewLendingSummary = typeof lendingSummaries.$inferInsert;

export const lendingSummaries = pgTable('lendingSummaries', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  lendingProductId: integer('lendingProductId').notNull(),
  positionId: varchar('positionId', { length: 30 }),
  type: varchar('type', { length: 256 }),
  trxHash: char('trxHash', { length: 42 }),
  fee: decimal('fee', { precision: 15, scale: 2 }),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
