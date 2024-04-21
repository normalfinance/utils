import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
import { investments } from './investments';

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

export const investmentOrders = pgTable('investmentOrders', {
  id: serial('id').primaryKey(),
  investmentId: integer('investmentId').notNull(),
  orderId: varchar('orderId', { length: 256 }).notNull(),
  asset: varchar('asset', { length: 6 }).notNull(),
  price: decimal('price', { precision: 15, scale: 2 }).notNull(), // optional?
  amount: varchar('amount', { length: 256 }).notNull(), // optional?
  usdValue: decimal('usdValue', { precision: 15, scale: 2 }).notNull(),
  fee: decimal('fee', { precision: 15, scale: 2 }).notNull(), // optional?
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const investmentOrdersRelations = relations(
  investmentOrders,
  ({ one }) => ({
    investment: one(investments, {
      fields: [investmentOrders.investmentId],
      references: [investments.id],
    }),
  }),
);
