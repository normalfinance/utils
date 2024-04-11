import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  decimal,
} from 'drizzle-orm/pg-core';

import { investments } from './investments';

export type Charge = typeof charges.$inferSelect;
export type NewCharge = typeof charges.$inferInsert;

export const ChargeAsset = pgEnum('chargeAsset', ['SOL']);
export const ChargeStatus = pgEnum('chargeStatus', [
  'new',
  'successful',
  'failed',
]);

export const charges = pgTable('charges', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  investmentId: integer('investmentId').notNull(),
  asset: ChargeAsset('asset').notNull(),
  price: decimal('usdValue', { precision: 5, scale: 2 }).notNull(), // Solana
  amount: decimal('amount', { precision: 13, scale: 10 }).notNull(), // Solana
  exchangeTransferId: varchar('exchangeTransferId', {
    length: 256,
  }).notNull(),
  status: ChargeStatus('status').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const chargesRelations = relations(charges, ({ one }) => ({
  investment: one(investments, {
    fields: [charges.investmentId],
    references: [investments.id],
  }),
}));
