import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
import { divestments } from './divestments';

export type DivestmentOrder = typeof divestmentOrders.$inferSelect;
export type NewDivestmentOrder = typeof divestmentOrders.$inferInsert;
export type DivestmentOrderWithRelations = InferResultType<
  'divestmentOrders',
  { divestment: true }
>;
export type DivestmentOrderWithNestedRelations = InferResultType<
  'divestmentOrders',
  {
    divestment: {
      with: {
        exchange: {
          columns: { apiKey: false; apiSecret: false; apiPass: false };
        };
        index: { columns: { title: true; description: true } };
        orders: true;
      };
    };
  }
>;

export const divestmentOrders = pgTable(
  'divestmentOrders',
  {
    id: serial('id').primaryKey(),
    divestmentId: integer('divestmentId').notNull(),
    orderId: varchar('orderId', { length: 256 }).notNull(),
    asset: varchar('asset', { length: 10 }).notNull(),
    price: varchar('price', { length: 40 }).notNull(),
    amount: varchar('amount', { length: 256 }).notNull(),
    usdValue: varchar('usdValue', { length: 40 }).notNull(),
    fee: varchar('fee', { length: 40 }).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (table) => ({
    unq: uniqueIndex().on(table.orderId),
  }),
);

export const divestmentOrdersRelations = relations(
  divestmentOrders,
  ({ one }) => ({
    divestment: one(divestments, {
      fields: [divestmentOrders.divestmentId],
      references: [divestments.id],
    }),
  }),
);
