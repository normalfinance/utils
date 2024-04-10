import {
  pgEnum,
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core';

export type SelectExchange = typeof exchanges.$inferSelect;
export type InsertExchange = typeof exchanges.$inferInsert;

export const exchangeTypeEnum = pgEnum('type', [
  'coinbase',
  'binance',
  'binance_us',
  'bybit',
  'okx',
]);
export const exchangeVersionEnum = pgEnum('version', ['v1', 'v2']);

export const exchanges = pgTable('exchanges', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  type: exchangeTypeEnum('type').notNull(),
  nickname: varchar('nickname', { length: 256 }).notNull(),
  apiKey: varchar('apiKey', { length: 256 }).notNull(),
  apiSecret: varchar('apiSecret', { length: 256 }).notNull(),
  apiPass: varchar('apiPass', { length: 256 }),
  version: exchangeVersionEnum('version').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
