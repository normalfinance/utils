import { relations } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  boolean,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { lendingDeposits } from './lendingDeposits';
import { lendingPositionUpdates } from './lendingPositionUpdates';
import { lendingSummaries } from './lendingSummaries';
import { lendingWithdrawals } from './lendingWithdrawal';

export type LendingUser = typeof lendingUsers.$inferSelect;
export type NewLendingUser = typeof lendingUsers.$inferInsert;
export type LendingUserWithRelations = InferResultType<
  'lendingUsers',
  { deposits: true; withdrawals: true; updates: true; summaries: true }
>;
export type LendingUserWithNestedRelations = InferResultType<
  'lendingUsers',
  {
    deposits: { with: { product: true } };
    withdrawals: { with: { product: true } };
    updates: { with: { product: true } };
    summaries: { with: { product: true } };
  }
>;

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
  updates: many(lendingPositionUpdates),
  summaries: many(lendingSummaries),
}));
