import { relations } from 'drizzle-orm';
import { pgTable, serial, timestamp, uuid, integer } from 'drizzle-orm/pg-core';

import { notificationTypes } from './notificationTypes';

export type NotificationSetting = typeof notificationSettings.$inferSelect;
export type NewNotificationSetting = typeof notificationSettings.$inferInsert;

export const notificationSettings = pgTable('notificationSettings', {
  id: serial('id').primaryKey(),
  userId: uuid('userId').notNull(),
  typeId: integer('typeId').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const notificationSettingsRelations = relations(
  notificationSettings,
  ({ one }) => ({
    type: one(notificationTypes, {
      fields: [notificationSettings.typeId],
      references: [notificationTypes.id],
    }),
  }),
);
