import {
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export type UserMigration = typeof userMigrations.$inferSelect;
export type NewUserMigration = typeof userMigrations.$inferInsert;

export const userMigrations = pgTable('userMigrations', {
  id: serial('id').primaryKey(),
  legacyUserId: char('legacyUserId', { length: 42 }).notNull(),
  user: uuid('userId'),
  email: varchar('email', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
