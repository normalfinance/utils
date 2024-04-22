import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  timestamp,
  decimal,
  date,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../../types/database/helpers';
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
  timeframe: integer('timeframe').notNull(),
  date: date('date').notNull(),
  value: decimal('value', { precision: 9, scale: 6 }).notNull(),
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
