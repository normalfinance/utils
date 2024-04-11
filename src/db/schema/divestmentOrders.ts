import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import { divestments } from './divestments';

export type DivestmentOrder = typeof divestmentOrders.$inferSelect;
export type NewDivestmentOrder = typeof divestmentOrders.$inferInsert;

export const divestmentOrders = pgTable('divestmentOrders', {
  id: serial('id').primaryKey(),
  divestmentId: integer('divestmentId').notNull(),
  orderId: varchar('orderId', { length: 256 }).notNull(),
  asset: varchar('asset', { length: 6 }).notNull(),
  price: decimal('price', { precision: 15, scale: 2 }).notNull(),
  amount: varchar('amount', { length: 256 }).notNull(),
  usdValue: decimal('usdValue', { precision: 15, scale: 2 }).notNull(),
  fee: decimal('fee', { precision: 15, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const divestmentOrdersRelations = relations(
  divestmentOrders,
  ({ one }) => ({
    divestment: one(divestments, {
      fields: [divestmentOrders.divestmentId],
      references: [divestments.id],
    }),
  }),
);
