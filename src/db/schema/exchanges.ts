import {
  pgEnum,
  pgTable,
  varchar,
  char,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core';

export type Exchange = typeof exchanges.$inferSelect;
export type SanitizedExchange = Omit<
  Exchange,
  'apiKey' | 'apiSecret' | 'apiPass'
>;
export type NewExchange = typeof exchanges.$inferInsert;

export const ExchangeType = pgEnum('type', [
  'coinbase',
  'binance',
  'binance_us',
  'bybit',
  'okx',
]);
export const ExchangeVersion = pgEnum('version', ['v1', 'v2']);

export const exchanges = pgTable('exchanges', {
  id: serial('id').primaryKey(),
  userId: char('userId', { length: 42 }).notNull(),
  type: ExchangeType('type').notNull(),
  nickname: varchar('nickname', { length: 256 }).notNull(),
  apiKey: varchar('apiKey', { length: 256 }).notNull(),
  apiSecret: varchar('apiSecret', { length: 256 }).notNull(),
  apiPass: varchar('apiPass', { length: 256 }),
  version: ExchangeVersion('version').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
