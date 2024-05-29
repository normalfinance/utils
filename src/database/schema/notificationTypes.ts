import { pgTable, serial, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export type NotificationType = typeof notificationTypes.$inferSelect;
export type NewNotificationType = typeof notificationTypes.$inferInsert;

export const NotificationType = pgEnum('NotificationType', ['BUY', 'SELL']);

export const notificationTypes = pgTable('notificationTypes', {
  id: serial('id').primaryKey(),
  type: NotificationType('type').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
