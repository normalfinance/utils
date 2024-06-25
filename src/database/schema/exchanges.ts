import {
  pgEnum,
  pgTable,
  varchar,
  serial,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export type Exchange = typeof exchanges.$inferSelect;
export type NewExchange = typeof exchanges.$inferInsert;
export type SanitizedExchange = Omit<
  Exchange,
  'apiKey' | 'apiSecret' | 'apiPass'
>;

export const ExchangeType = pgEnum('ExchangeType', [
  'coinbase',
  'kraken',
  'binance',
  'binance_us',
  'bybit',
  'okx',
  'gemini',
  'kucoin',
]);
export const ExchangeVersion = pgEnum('ExchangeVersion', ['v1', 'v2']);

export const exchanges = pgTable('exchanges', {
  id: serial('id').primaryKey(),
  legacyUserId: varchar('legacyUserId', { length: 42 }),
  userId: uuid('userId'),
  type: ExchangeType('type').notNull(),
  nickname: varchar('nickname', { length: 50 }).notNull(),
  apiKey: varchar('apiKey', { length: 400 }).notNull(),
  apiSecret: varchar('apiSecret', { length: 400 }).notNull(),
  apiPass: varchar('apiPass', { length: 400 }),
  version: ExchangeVersion('version').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
