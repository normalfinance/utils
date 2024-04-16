import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  char,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { divestmentOrders } from './divestmentOrders';
import { exchanges } from './exchanges';
import { indexes } from './indexes';

export type Divestment = typeof divestments.$inferSelect;
export type NewDivestment = typeof divestments.$inferInsert;
export type DivestmentWithOrders = InferResultType<
  'divestments',
  { orders: true }
>;
export type DivestmentWithRelations = InferResultType<
  'divestments',
  {
    exchange: { columns: { type: true; nickname: true } };
    index: { columns: { title: true; description: true } };
    orders: true;
  }
>;

export const divestments = pgTable('divestments', {
  id: serial('id').primaryKey(),
  idempotencyKey: char('idempotencyKey', { length: 256 }).notNull(),
  userId: char('userId', { length: 42 }).notNull(),
  exchangeId: integer('exchangeId').notNull(),
  indexId: integer('indexId').notNull(),
  portion: decimal('portion', { precision: 3, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const divestmentsRelations = relations(divestments, ({ one, many }) => ({
  exchange: one(exchanges, {
    fields: [divestments.exchangeId],
    references: [exchanges.id],
  }),
  index: one(indexes, {
    fields: [divestments.indexId],
    references: [indexes.id],
  }),
  orders: many(divestmentOrders),
}));
