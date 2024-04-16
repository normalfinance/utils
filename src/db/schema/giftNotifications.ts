import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { gifts } from './gifts';

export type GiftNotification = typeof giftNotifications.$inferSelect;
export type NewGiftNotification = typeof giftNotifications.$inferInsert;
export type GiftNotificationWithGift = InferResultType<
  'giftNotifications',
  { gift: true }
>;

export const giftNotifications = pgTable('giftNotifications', {
  id: serial('id').primaryKey(),
  giftId: integer('giftId').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const giftNotificationsRelations = relations(
  giftNotifications,
  ({ one }) => ({
    gift: one(gifts, {
      fields: [giftNotifications.giftId],
      references: [gifts.id],
    }),
  }),
);
