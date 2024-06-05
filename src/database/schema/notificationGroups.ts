import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export type NotificationGroup = typeof notificationGroups.$inferSelect;
export type NewNotificationGroup = typeof notificationGroups.$inferInsert;

export const notificationGroups = pgTable('notificationGroups', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  description: varchar('description').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
