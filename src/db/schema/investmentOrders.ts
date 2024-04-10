import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import { investments } from './investments';

export type SelectInvestmentOrder = typeof investmentOrders.$inferSelect;
export type InsertInvestmentOrder = typeof investmentOrders.$inferInsert;

export const investmentOrders = pgTable('investmentOrders', {
  id: serial('id').primaryKey(),
  investmentId: integer('investmentId').notNull(),
  orderId: varchar('orderId', { length: 256 }).notNull(),
  asset: varchar('asset', { length: 6 }).notNull(),
  price: decimal('price', { precision: 15, scale: 2 }).notNull(),
  amount: varchar('amount', { length: 256 }).notNull(),
  usdValue: decimal('usdValue', { precision: 15, scale: 2 }).notNull(),
  fee: decimal('fee', { precision: 15, scale: 2 }).notNull(),
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
