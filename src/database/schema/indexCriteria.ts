import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
  boolean,
  bigint,
} from 'drizzle-orm/pg-core';

export type IndexCriteria = typeof indexCriteria.$inferSelect;
export type NewIndexCriteria = typeof indexCriteria.$inferInsert;

export const indexCriteria = pgTable('indexCriteria', {
  id: serial('id').primaryKey(),
  topX: integer('topX'),
  assets: varchar('assets', { length: 256 }), // BTC, ETH
  whitelist: varchar('whitelist', { length: 256 }), // BTC, ETH
  blacklist: varchar('blacklist', { length: 256 }), // BTC, ETH
  includeStablecoins: boolean('includeStablecoins').default(false).notNull(),
  minMarketCap: bigint('minMarketCap', { mode: 'number' }),
  maxMarketCap: bigint('maxMarketCap', { mode: 'number' }),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  deletedAt: timestamp('deletedAt'), // soft delete
});
