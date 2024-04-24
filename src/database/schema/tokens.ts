import {
  pgTable,
  serial,
  date,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export type Token = typeof tokens.$inferSelect;
export type NewToken = typeof tokens.$inferInsert;

export const tokens = pgTable(
  'tokens',
  {
    id: serial('id').primaryKey(),
    asset: varchar('asset').notNull(),
    date: date('date', { mode: 'date' }).notNull(),
    price: varchar('price').notNull(),
    marketCap: varchar('marketCap').notNull(),
    volume24h: varchar('volume24h').notNull(),
    volumeChange24h: varchar('volumeChange24h').notNull(),
    percentChange1h: varchar('percentChange1h').notNull(),
    percentChange24h: varchar('percentChange24h').notNull(),
    percentChange7d: varchar('percentChange7d').notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (table) => ({
    unq: uniqueIndex().on(table.asset, table.date),
  }),
);
