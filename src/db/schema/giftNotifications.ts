import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

import { gifts } from './gifts';

export type GiftNotification = typeof giftNotifications.$inferSelect;
export type NewGiftNotification = typeof giftNotifications.$inferInsert;

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
