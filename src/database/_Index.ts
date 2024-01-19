export type Index = {
  id: string; // Primary Key
  title: string; // GSI
  description: string;
  createdBy: string;
  isPrivate: boolean; // True = personal use; False = public use (w/ rev. share)
  criteria: IndexCriteria;
  strategy: IndexStrategy;
  weightsByDate: Record<string, Record<string, number>>; // YYYY-MM-DD > BTC > 0.235
  createdAt: number; // Unix Timestamp
  updatedAt: number; // Unix Timestamp
  rebalancedAt: number; // Unix Timestamp
};

export type IndexCriteria = {
  assets?: string[]; // BTC, ETH, etc.
  whitelist?: string[];
  blacklist?: string[];
  includeStablecoins?: boolean;
  minMarketCap?: number;
  maxMarketCap?: number;
  // minWeight?: number;
  // minAssets?: number;
  // maxAssets?: number;
};

export enum IndexStrategy {
  CONSTANT = 'CONSTANT', // the same % allocation for every asset
  CUSTOM = 'CUSTOM', // custom % allocations that equal 100%
  WEIGHTED_MCAP = 'WEIGHTED_MCAP', // weighted % allocations of the market cap
  WEIGHTED_SQRT_MCAP = 'WEIGHTED_SQRT_MCAP', // weighted % allocations of the market cap square root
}

export enum LiveIndexIds {
  NCI = 'NCI',
  DFI = 'DFI',
  TOP10 = 'TOP10',
}
