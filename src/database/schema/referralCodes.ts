import { relations } from 'drizzle-orm';
import { pgTable, varchar, serial, timestamp, uuid } from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
import { referrals } from './referrals';

export type ReferralCode = typeof referralCodes.$inferSelect;
export type NewReferralCode = typeof referralCodes.$inferInsert;
export type ReferralCodeWithReferrals = InferResultType<
  'referralCodes',
  { referrals: true }
>;

export const referralCodes = pgTable('referralCodes', {
  id: serial('id').primaryKey(),
  legacyUserId: varchar('legacyUserId', { length: 42 }).notNull(),
  userId: uuid('userId'),
  code: varchar('code', { length: 21 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const referralCodesRelations = relations(referralCodes, ({ many }) => ({
  referrals: many(referrals),
}));
