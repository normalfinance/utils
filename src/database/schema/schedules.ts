import { relations } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  serial,
  timestamp,
  uuid,
  interval,
  integer,
  pgEnum,
  decimal,
  boolean,
} from 'drizzle-orm/pg-core';

import { indexes } from './indexes';

export type Schedule = typeof schedules.$inferSelect;
export type NewSchedule = typeof schedules.$inferInsert;

export const ScheduleAmountType = pgEnum('ScheduleAmountType', [
  'fiat',
  'crypto',
]);

export const schedules = pgTable('schedules', {
  id: serial('id').primaryKey(),
  userId: uuid('userId').notNull(),
  exchangeId: integer('exchangeId').notNull(),
  frequency: interval('frequency', {}).notNull(),
  asset: varchar('asset', { length: 10 }),
  indexId: integer('indexId'),
  amountType: ScheduleAmountType('amountType').notNull(),
  amount: decimal('amount').notNull(),
  active: boolean('active').default(true).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const schedulesRelations = relations(schedules, ({ one }) => ({
  index: one(indexes, {
    fields: [schedules.indexId],
    references: [indexes.id],
  }),
}));
