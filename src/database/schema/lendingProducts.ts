import {
  decimal,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export type LendingProduct = typeof lendingProducts.$inferSelect;
export type NewLendingProduct = typeof lendingProducts.$inferInsert;

export const LendingRisk = pgEnum('LendingRisk', ['low', 'medium', 'high']);
export const LendingProductChain = pgEnum('LendingProductChain', ['matic']);
export const LendingProductProtocol = pgEnum('LendingProductProtocol', [
  'matic_uniswap3',
  'matic_aave3',
]);

export const lendingProducts = pgTable('lendingProducts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  description: varchar('description', { length: 256 }).notNull(),
  risk: LendingRisk('risk').notNull(),
  projectedAPY: decimal('projectedAPY', { precision: 7, scale: 4 }).notNull(),
  chain: LendingProductChain('chain').notNull(),
  protocol: LendingProductProtocol('protocol').notNull(),
  assets: varchar('assets', { length: 256 }).notNull(), // BTC, ETH
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
