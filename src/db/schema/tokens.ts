import {
  pgTable,
  varchar,
  serial,
  decimal,
  bigint,
  timestamp,
} from 'drizzle-orm/pg-core';

export type Token = typeof tokens.$inferSelect;
export type NewToken = typeof tokens.$inferInsert;

export const tokens = pgTable('tokens', {
  id: serial('id').primaryKey(),
  asset: varchar('asset', { length: 6 }).notNull(),
  price: decimal('price', { precision: 40, scale: 20 }).notNull(),
  marketCap: bigint('marketCap', { mode: 'number' }).notNull(),
  volume24h: bigint('volume24h', { mode: 'number' }).notNull(),
  volumeChange24h: decimal('volumeChange24h', {
    precision: 12,
    scale: 8,
  }).notNull(),
  percentChange1h: decimal('percentChange1h', {
    precision: 12,
    scale: 8,
  }).notNull(),
  percentChange24h: decimal('percentChange24h', {
    precision: 12,
    scale: 8,
  }).notNull(),
  percentChange7d: decimal('percentChange7d', {
    precision: 12,
    scale: 8,
  }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
