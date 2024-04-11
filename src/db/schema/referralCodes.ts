import { relations } from 'drizzle-orm';
import { pgTable, varchar, char, serial, timestamp } from 'drizzle-orm/pg-core';

import { referrals } from './referrals';

export type ReferralCode = typeof referralCodes.$inferSelect;
export type NewReferralCode = typeof referralCodes.$inferInsert;

export const referralCodes = pgTable('referralCodes', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  code: varchar('code', { length: 21 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const referralCodesRelations = relations(referralCodes, ({ many }) => ({
  referrals: many(referrals),
}));
