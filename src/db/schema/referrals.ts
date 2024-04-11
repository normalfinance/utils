import { relations } from 'drizzle-orm';
import { integer, pgTable, char, serial, timestamp } from 'drizzle-orm/pg-core';

import { referralCodes } from './referralCodes';

export type Referral = typeof referrals.$inferSelect;
export type NewReferral = typeof referrals.$inferInsert;

export const referrals = pgTable('referrals', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  referral: char('referral', { length: 42 }).notNull(),
  referralCodeId: integer('referralCodeId').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const referralsRelations = relations(referrals, ({ one }) => ({
  referredBy: one(referralCodes, {
    fields: [referrals.referralCodeId],
    references: [referralCodes.id],
  }),
}));
