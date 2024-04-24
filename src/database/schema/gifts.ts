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

import type { InferResultType } from '../../types/database/helpers';
import { exchanges } from './exchanges';
import { giftNotifications } from './giftNotifications';

export type Gift = typeof gifts.$inferSelect;
export type NewGift = typeof gifts.$inferInsert;
export type GiftWithNotifications = InferResultType<
  'gifts',
  { notifications: true }
>;

export const GiftRecipientType = pgEnum('GiftRecipientType', ['email']);
export const GiftRedemptionType = pgEnum('GiftRedemptionType', [
  'wallet',
  'exchange',
]);
export const GiftStatus = pgEnum('GiftStatus', ['new', 'redeemed', 'failed']);

export const gifts = pgTable('gifts', {
  id: serial('id').primaryKey(),
  idempotencyKey: char('idempotencyKey', { length: 256 }).notNull(),
  userId: varchar('userId', { length: 42 }).notNull(),
  exchangeId: integer('exchangeId').notNull(),
  asset: varchar('asset', { length: 6 }).notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  message: varchar('message', { length: 256 }).notNull(),
  recipient: varchar('recipient', { length: 256 }).notNull(),
  recipientType: GiftRecipientType('recipientType').notNull(),
  redemptionType: GiftRedemptionType('redemptionType'),
  redemptionAddress: char('redemptionAddress', { length: 42 }),
  status: GiftStatus('status').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  redeemedAt: timestamp('redeemedAt'),
});

export const giftsRelations = relations(gifts, ({ one, many }) => ({
  exchange: one(exchanges, {
    fields: [gifts.exchangeId],
    references: [exchanges.id],
  }),
  notifications: many(giftNotifications),
}));
