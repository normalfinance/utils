import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  char,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import { charges } from './charges';
import { exchanges } from './exchanges';
import { indexes } from './indexes';
import { investmentOrders } from './investmentOrders';

export type SelectInvestment = typeof investments.$inferSelect;
export type InsertInvestment = typeof investments.$inferInsert;

export const investmentCurrencyEnum = pgEnum('currency', ['usd', 'usdt']);
export const investmentFeeStatusEnum = pgEnum('status', [
  'pending',
  'successful',
  'failed',
]);

export const investments = pgTable('investments', {
  id: serial('id').primaryKey(),
  idempotencyKey: char('idempotencyKey', { length: 256 }).notNull(),
  userId: char('userId', { length: 42 }).notNull(),
  exchangeId: integer('exchangeId').notNull(),
  indexId: integer('indexId').notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  currency: investmentCurrencyEnum('currency').notNull(),
  fee: decimal('fee', { precision: 15, scale: 2 }).notNull(),
  feeStatus: investmentFeeStatusEnum('feeStatus').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const investmentsRelations = relations(investments, ({ one, many }) => ({
  exchange: one(exchanges, {
    fields: [investments.exchangeId],
    references: [exchanges.id],
  }),
  index: one(indexes, {
    fields: [investments.indexId],
    references: [indexes.id],
  }),
  orders: many(investmentOrders),
  charge: one(charges, {
    fields: [investments.id],
    references: [charges.id],
  }),
}));
