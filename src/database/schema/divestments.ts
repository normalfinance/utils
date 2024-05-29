import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  char,
  serial,
  timestamp,
  decimal,
  pgEnum,
  uuid,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
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

export const DivestmentExecutionType = pgEnum('DivestmentExecutionType', [
  'user',
  'auto',
]);
export const DivestmentStatus = pgEnum('DivestmentStatus', [
  'new',
  'processing',
  'failed',
  'successful',
]);

export const divestments = pgTable(
  'divestments',
  {
    id: serial('id').primaryKey(),
    idempotencyKey: char('idempotencyKey', { length: 256 }).notNull(),
    userId: uuid('userId').notNull(),
    exchangeId: integer('exchangeId').notNull(),
    indexId: integer('indexId').notNull(),
    executionType: DivestmentExecutionType('executionType').notNull(),
    portion: decimal('portion', { precision: 3, scale: 2 }).notNull(),
    status: DivestmentStatus('status').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (table) => ({
    unq: uniqueIndex().on(table.userId, table.idempotencyKey),
  }),
);

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
