import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  varchar,
  serial,
  decimal,
  date,
} from 'drizzle-orm/pg-core';

import { indexes } from './indexes';

export type SelectIndexWeight = typeof indexWeights.$inferSelect;
export type InsertIndexWeight = typeof indexWeights.$inferInsert;

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
