import { relations } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  boolean,
} from 'drizzle-orm/pg-core';

import { lendingDeposits } from './lendingDeposits';
import { lendingWithdrawals } from './lendingWithdrawal';

export type SelectLendingUser = typeof lendingUsers.$inferSelect;
export type InsertLendingUser = typeof lendingUsers.$inferInsert;

export const lendingUsers = pgTable('lendingUsers', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  manager: char('manager', { length: 42 }).notNull(),
  active: boolean('active').notNull(),
  tag: varchar('tag', { length: 50 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const lendingUsersRelations = relations(lendingUsers, ({ many }) => ({
  deposits: many(lendingDeposits),
  withdrawals: many(lendingWithdrawals),
}));