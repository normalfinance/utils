import {
  pgTable,
  serial,
  timestamp,
  pgEnum,
  varchar,
} from 'drizzle-orm/pg-core';

export type NotificationType = typeof notificationTypes.$inferSelect;
export type NewNotificationType = typeof notificationTypes.$inferInsert;

export const NotificationType = pgEnum('NotificationType', [
  'company_announcements',
  'product_updates',
  'marketing',
  'exchange_updates',
  'investment_updates',
  'divestment_updates',
  'index_updates',
  'referral_updates',
  'billing_updates',
  'lending_updates',
]);

export const notificationTypes = pgTable('notificationTypes', {
  id: serial('id').primaryKey(),
  type: NotificationType('type').notNull(),
  description: varchar('description').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
