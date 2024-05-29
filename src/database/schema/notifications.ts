import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  timestamp,
  uuid,
  integer,
  json,
} from 'drizzle-orm/pg-core';

import { notificationTypes } from './notificationTypes';

export type Notification = typeof notifications.$inferSelect;
export type NewNotification = typeof notifications.$inferInsert;

export const notifications = pgTable('notifications', {
  id: serial('id').primaryKey(),
  userId: uuid('userId').notNull(),
  typeId: integer('typeId').notNull(),
  data: json('data'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const notificationsRelations = relations(notifications, ({ one }) => ({
  type: one(notificationTypes, {
    fields: [notifications.typeId],
    references: [notificationTypes.id],
  }),
}));
