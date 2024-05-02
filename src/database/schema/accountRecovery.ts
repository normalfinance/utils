import {
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export type AccountRecovery = typeof accountRecovery.$inferSelect;
export type NewAccountRecovery = typeof accountRecovery.$inferInsert;

export const accountRecovery = pgTable('accountRecovery', {
  id: serial('id').primaryKey(),
  legacyUserId: char('legacyUserId', { length: 42 }).notNull(),
  email: varchar('email', { length: 256 }),
  phone: varchar('phone', { length: 15 }),
  userId: uuid('userId'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
