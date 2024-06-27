import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core';

import { investments } from './investments';
import { rebalanceOrders } from './rebalanceOrders';

export type Rebalance = typeof rebalances.$inferSelect;
export type NewRebalance = typeof rebalances.$inferInsert;

export const RebalanceStatus = pgEnum('RebalanceStatus', [
  'new',
  'processing',
  'failed',
  'successful',
]);

export const rebalances = pgTable('rebalances', {
  id: serial('id').primaryKey(),
  investmentId: integer('investmentId').notNull(),
  status: RebalanceStatus('status').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const rebalancesRelations = relations(rebalances, ({ one, many }) => ({
  investment: one(investments, {
    fields: [rebalances.investmentId],
    references: [investments.id],
  }),
  orders: many(rebalanceOrders),
}));
