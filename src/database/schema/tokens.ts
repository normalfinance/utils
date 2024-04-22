import {
  pgTable,
  serial,
  text,
  date,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export type Token = typeof tokens.$inferSelect;
export type NewToken = typeof tokens.$inferInsert;

export const tokens = pgTable(
  'tokens',
  {
    id: serial('id').primaryKey(),
    asset: text('asset').notNull(),
    date: date('date', { mode: 'date' }).notNull(),
    price: text('price').notNull(),
    marketCap: text('marketCap').notNull(),
    volume24h: text('volume24h').notNull(),
    volumeChange24h: text('volumeChange24h').notNull(),
    percentChange1h: text('percentChange1h').notNull(),
    percentChange24h: text('percentChange24h').notNull(),
    percentChange7d: text('percentChange7d').notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (table) => ({
    unq: uniqueIndex().on(table.asset, table.date),
  }),
);
