import { relations } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  boolean,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
import { lendingDeposits } from './lendingDeposits';
import { lendingPositionUpdates } from './lendingPositionUpdates';
import { lendingSummaries } from './lendingSummaries';
import { lendingWithdrawals } from './lendingWithdrawal';

export type Lender = typeof lenders.$inferSelect;
export type NewLender = typeof lenders.$inferInsert;
export type LenderWithRelations = InferResultType<
  'lenders',
  { deposits: true; withdrawals: true; updates: true; summaries: true }
>;
export type LenderWithNestedRelations = InferResultType<
  'lenders',
  {
    deposits: { with: { product: true } };
    withdrawals: { with: { product: true } };
    updates: { with: { product: true } };
    summaries: { with: { product: true } };
  }
>;

export const lenders = pgTable('lenders', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  manager: char('manager', { length: 42 }).notNull(),
  active: boolean('active').notNull(),
  tag: varchar('tag', { length: 50 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const lendersRelations = relations(lenders, ({ many }) => ({
  deposits: many(lendingDeposits),
  withdrawals: many(lendingWithdrawals),
  updates: many(lendingPositionUpdates),
  summaries: many(lendingSummaries),
}));
