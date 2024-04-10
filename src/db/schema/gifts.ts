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

import { exchanges } from './exchanges';
import { giftNotifications } from './giftNotifications';

export type SelectGift = typeof gifts.$inferSelect;
export type InsertGift = typeof gifts.$inferInsert;

export const giftRecipientTypeEnum = pgEnum('recipientType', ['email']);
export const giftRedemptionTypeEnum = pgEnum('redemptionType', [
  'wallet',
  'exchange',
]);
export const giftStatusEnum = pgEnum('giftStatusEnum', [
  'new',
  'redeemed',
  'failed',
]);

export const gifts = pgTable('gifts', {
  id: serial('id').primaryKey(),
  idempotencyKey: char('idempotencyKey', { length: 256 }).notNull(),
  userId: char('userId', { length: 42 }).notNull(),
  exchangeId: integer('exchangeId').notNull(),
  asset: varchar('asset', { length: 6 }).notNull(),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  message: varchar('message', { length: 256 }).notNull(),
  recipient: varchar('recipient', { length: 256 }).notNull(),
  recipientType: giftRecipientTypeEnum('recipientType').notNull(),
  redemptionType: giftRedemptionTypeEnum('redemptionType'),
  redemptionAddress: char('redemptionAddress', { length: 42 }),
  status: giftStatusEnum('status').notNull(),
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
