import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

import { rebalances } from './rebalances';

export type RebalanceOrder = typeof rebalanceOrders.$inferSelect;
export type NewRebalanceOrder = typeof rebalanceOrders.$inferInsert;

export const rebalanceOrders = pgTable(
  'rebalanceOrders',
  {
    id: serial('id').primaryKey(),
    rebalanceId: integer('rebalanceId').notNull(),
    orderId: varchar('orderId', { length: 256 }).notNull(),
    asset: varchar('asset', { length: 10 }).notNull(),
    price: varchar('price', { length: 40 }).notNull(),
    amount: varchar('amount', { length: 40 }).notNull(),
    usdValue: varchar('usdValue', { length: 40 }).notNull(),
    fee: varchar('fee', { length: 40 }).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (table) => ({
    unq: uniqueIndex().on(table.orderId),
  }),
);

export const rebalanceOrdersRelations = relations(
  rebalanceOrders,
  ({ one }) => ({
    rebalance: one(rebalances, {
      fields: [rebalanceOrders.rebalanceId],
      references: [rebalances.id],
    }),
  }),
);
