import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

export type LendingWithdrawal = typeof lendingWithdrawals.$inferSelect;
export type NewLendingWithdrawal = typeof lendingWithdrawals.$inferInsert;

export const lendingWithdrawals = pgTable('lendingWithdrawals', {
  id: serial('id').primaryKey(),
  lendingUserId: integer('lendingUserId').notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  lendingProductId: integer('lendingProductId').notNull(),
  via: varchar('via', { length: 50 }).notNull(),
  viaId: varchar('viaId', { length: 256 }).notNull(),
  commission: decimal('commission', { precision: 15, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
