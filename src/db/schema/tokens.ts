import {
  pgTable,
  varchar,
  serial,
  decimal,
  bigint,
  date,
} from 'drizzle-orm/pg-core';

export type Token = typeof tokens.$inferSelect;
export type NewToken = typeof tokens.$inferInsert;

export const tokens = pgTable('tokens', {
  id: serial('id').primaryKey(),
  date: date('date', { mode: 'string' }).notNull(),
  asset: varchar('asset', { length: 6 }).notNull(),
  price: decimal('price', { precision: 40, scale: 20 }).notNull(),
  marketCap: bigint('marketCap', { mode: 'number' }).notNull(),
  volume24h: bigint('volume24h', { mode: 'number' }),
  volumeChange24h: decimal('volumeChange24h', {
    precision: 12,
    scale: 8,
  }),
  percentChange1h: decimal('percentChange1h', {
    precision: 12,
    scale: 8,
  }),
  percentChange24h: decimal('percentChange24h', {
    precision: 12,
    scale: 8,
  }),
  percentChange7d: decimal('percentChange7d', {
    precision: 12,
    scale: 8,
  }),
});
