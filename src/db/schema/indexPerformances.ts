import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  timestamp,
  decimal,
  date,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { indexes } from './indexes';

export type IndexPerformance = typeof indexPerformances.$inferSelect;
export type NewIndexPerformance = typeof indexPerformances.$inferInsert;
export type IndexPerformanceWithIndex = InferResultType<
  'indexPerformances',
  { index: true }
>;

export const indexPerformances = pgTable('indexPerformances', {
  id: serial('id').primaryKey(),
  indexId: integer('indexId').notNull(),
  date: date('date').notNull(),
  timeframe: integer('timeframe').notNull(),
  timeframeDate: date('timeframeDate').notNull(),
  value: decimal('weight', { precision: 9, scale: 6 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const indexPerformancesRelations = relations(
  indexPerformances,
  ({ one }) => ({
    index: one(indexes, {
      fields: [indexPerformances.indexId],
      references: [indexes.id],
    }),
  }),
);
