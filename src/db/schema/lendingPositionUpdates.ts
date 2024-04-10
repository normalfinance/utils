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

export type SelectLendingPositionUpdate =
  typeof lendingPositionUpdates.$inferSelect;
export type InsertLendingPositionUpdate =
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
