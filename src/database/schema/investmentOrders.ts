import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

import { investments } from './investments';
import type { InferResultType } from '../../types/database/helpers';

export type InvestmentOrder = typeof investmentOrders.$inferSelect;
export type NewInvestmentOrder = typeof investmentOrders.$inferInsert;
export type InvestmentOrderWithRelations = InferResultType<
  'investmentOrders',
  { investment: true }
>;
export type InvestmentOrderWithNestedRelations = InferResultType<
  'investmentOrders',
  {
    investment: {
      with: {
        exchange: {
          columns: { apiKey: false; apiSecret: false; apiPass: false };
        };
        index: true;
        orders: true;
      };
    };
  }
>;

export const investmentOrders = pgTable(
  'investmentOrders',
  {
    id: serial('id').primaryKey(),
    investmentId: integer('investmentId').notNull(),
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

export const investmentOrdersRelations = relations(
  investmentOrders,
  ({ one }) => ({
    investment: one(investments, {
      fields: [investmentOrders.investmentId],
      references: [investments.id],
    }),
  }),
);
