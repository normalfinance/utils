import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  char,
  serial,
  timestamp,
  decimal,
  varchar,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
import { exchanges } from './exchanges';
import { indexes } from './indexes';
import { investmentOrders } from './investmentOrders';

export type Investment = typeof investments.$inferSelect;
export type NewInvestment = typeof investments.$inferInsert;
export type InvestmentWithRelations = InferResultType<
  'investments',
  {
    exchange: { columns: { type: true; nickname: true } };
    index: { columns: { title: true; description: true } };
    orders: true;
  }
>;

export const InvestmentCurrency = pgEnum('InvestmentCurrency', ['USD', 'USDT']);
export const InvestmentStatus = pgEnum('InvestmentStatus', [
  'new',
  'processing',
  'failed',
  'requires_2fa',
  'failed_charge',
  'successful',
]);

export const investments = pgTable('investments', {
  id: serial('id').primaryKey(),
  idempotencyKey: char('idempotencyKey', { length: 256 }).notNull(),
  userId: varchar('userId', { length: 42 }).notNull(),
  exchangeId: integer('exchangeId').notNull(),
  indexId: integer('indexId').notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  currency: InvestmentCurrency('currency').notNull(),
  fee: decimal('fee', { precision: 15, scale: 2 }),
  feeTransferAmount: decimal('feeTransferAmount', { precision: 10, scale: 5 }),
  feeTransferId: varchar('feeTransferId', {
    length: 256,
  }),
  status: InvestmentStatus('status').notNull(),
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
}));
