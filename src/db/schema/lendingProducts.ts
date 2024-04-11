import { pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

export type LendingProduct = typeof lendingProducts.$inferSelect;
export type NewLendingProduct = typeof lendingProducts.$inferInsert;

export const lendingProducts = pgTable('lendingProducts', {
  id: serial('id').primaryKey(),

  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
