import { pgTable, varchar, char, serial, timestamp } from 'drizzle-orm/pg-core';

export type UserMigration = typeof userMigrations.$inferSelect;
export type NewUserMigration = typeof userMigrations.$inferInsert;

export const userMigrations = pgTable('userMigrations', {
  id: serial('id').primaryKey(),
  address: char('address', { length: 42 }).notNull(),
  userId: varchar('userId', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
