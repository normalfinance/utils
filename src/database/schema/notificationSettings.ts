import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  timestamp,
  uuid,
  integer,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

import { notificationTypes } from './notificationTypes';
import type { InferResultType } from '../../types';

export type NotificationSetting = typeof notificationSettings.$inferSelect;
export type NewNotificationSetting = typeof notificationSettings.$inferInsert;
export type NotificationSettingWithType = InferResultType<
  'notificationSettings',
  {
    type: {
      with: {
        group: true;
      };
    };
  }
>;

// All notification settings are enabled for users by default
// If a row exists, it means the user has disabled that notification types
export const notificationSettings = pgTable(
  'notificationSettings',
  {
    id: serial('id').primaryKey(),
    userId: uuid('userId').notNull(),
    typeId: integer('typeId').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (table) => ({
    userAndTypeIdx: uniqueIndex().on(table.userId, table.typeId),
  }),
);

export const notificationSettingsRelations = relations(
  notificationSettings,
  ({ one }) => ({
    type: one(notificationTypes, {
      fields: [notificationSettings.typeId],
      references: [notificationTypes.id],
    }),
  }),
);
