import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  decimal,
  pgEnum,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { lenders } from './lender';
import { lendingProducts } from './lendingProducts';

export type LendingPositionUpdate = typeof lendingPositionUpdates.$inferSelect;
export type NewLendingPositionUpdate =
  typeof lendingPositionUpdates.$inferInsert;
export type LendingPositionUpdateWithProduct = InferResultType<
  'lendingPositionUpdates',
  { product: true }
>;

export const LendingPositionUpdateType = pgEnum('type', [
  'trade',
  'deposit',
  'swap',
  'approve',
  'mint_position_add_liquidity',
  'mint_position',
  'add_liquidity',
  'remove_liduidity',
  'remove_liduidity_with_fees',
  'collect_fees',
  'lend',
  'unlend',
]);

export const lendingPositionUpdates = pgTable('lendingPositionUpdates', {
  id: serial('id').primaryKey(),
  lenderId: integer('lenderId').notNull(),
  productId: integer('productId').notNull(),
  positionId: varchar('positionId', { length: 30 }),
  type: LendingPositionUpdateType('type').notNull(),
  trxHash: char('trxHash', { length: 42 }),
  fee: decimal('fee', { precision: 15, scale: 2 }),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const lendingPositionUpdatesRelations = relations(
  lendingPositionUpdates,
  ({ one }) => ({
    lender: one(lenders, {
      fields: [lendingPositionUpdates.lenderId],
      references: [lenders.id],
    }),
    product: one(lendingProducts, {
      fields: [lendingPositionUpdates.productId],
      references: [lendingProducts.id],
    }),
  }),
);
