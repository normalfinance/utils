import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  timestamp,
  varchar,
  integer,
} from 'drizzle-orm/pg-core';

import { notificationGroups } from './notificationGroups';

export type NotificationType = typeof notificationTypes.$inferSelect;
export type NewNotificationType = typeof notificationTypes.$inferInsert;

export const notificationTypes = pgTable('notificationTypes', {
  id: serial('id').primaryKey(),
  groupId: integer('groupId').notNull(),
  type: varchar('type').notNull(),
  description: varchar('description').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const notificationTypesRelations = relations(
  notificationTypes,
  ({ one }) => ({
    group: one(notificationGroups, {
      fields: [notificationTypes.groupId],
      references: [notificationGroups.id],
    }),
  }),
);
