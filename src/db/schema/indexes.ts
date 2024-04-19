import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
  boolean,
} from 'drizzle-orm/pg-core';

import type { InferResultType } from '../utils/helpers';
import { indexCriteria } from './indexCriteria';
import { indexPerformances } from './indexPerformances';
import { indexWeights } from './indexWeights';

export type Index = typeof indexes.$inferSelect;
export type NewIndex = typeof indexes.$inferInsert;
export type IndexWithRelations = InferResultType<
  'indexes',
  { criteria: true; weights: true; performances: true }
>;
export type IndexWithWeights = InferResultType<'indexes', { weights: true }>;
export type IndexWithCriteria = InferResultType<'indexes', { criteria: true }>;

export const IndexStategy = pgEnum('strategy', [
  'constant',
  'custom',
  'weighted_mcap',
  'weighted_sqrt_mcap',
]);

export const indexes = pgTable('indexes', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  title: varchar('title', { length: 50 }).notNull(),
  description: varchar('description', { length: 50 }).notNull(),
  privacy: boolean('privacy').default(true).notNull(),
  criteriaId: integer('criteriaId').notNull(),
  strategy: IndexStategy('strategy').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const indexesRelations = relations(indexes, ({ one, many }) => ({
  criteria: one(indexCriteria, {
    fields: [indexes.criteriaId],
    references: [indexCriteria.id],
  }),
  weights: many(indexWeights),
  performances: many(indexPerformances),
}));
