import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  decimal,
  date,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { indexes } from './indexes';

export type IndexWeight = typeof indexWeights.$inferSelect;
export type NewIndexWeight = typeof indexWeights.$inferInsert;
export type IndexWeightWithIndex = InferResultType<
  'indexWeights',
  { index: true }
>;

export const indexWeights = pgTable('indexWeights', {
  id: serial('id').primaryKey(),
  indexId: integer('indexId').notNull(),
  asset: varchar('asset', { length: 6 }).notNull(),
  weight: decimal('weight', { precision: 5, scale: 4 }).notNull(),
  createdOn: date('createdOn', { mode: 'string' }).notNull(),
});

export const indexWeightsRelations = relations(indexWeights, ({ one }) => ({
  index: one(indexes, {
    fields: [indexWeights.indexId],
    references: [indexes.id],
  }),
}));
