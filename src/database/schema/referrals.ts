import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
  uuid,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
import { referralCodes } from './referralCodes';

export type Referral = typeof referrals.$inferSelect;
export type NewReferral = typeof referrals.$inferInsert;
export type ReferralWithReferredBy = InferResultType<
  'referrals',
  { referredBy: true }
>;

export const referrals = pgTable('referrals', {
  id: serial('id').primaryKey(),
  legacyUserId: varchar('legacyUserId', { length: 42 }),
  userId: uuid('userId'),
  referral: varchar('referral', { length: 42 }).notNull(),
  referralCodeId: integer('referralCodeId').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const referralsRelations = relations(referrals, ({ one }) => ({
  referredBy: one(referralCodes, {
    fields: [referrals.referralCodeId],
    references: [referralCodes.id],
  }),
}));
