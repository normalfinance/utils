export type FeeSummary = {
  userId: string; // Primary Key
  totalFees: number;
  charges: Charge[];
  createdAt: number;
  updatedAt: number;
};

export type Charge = {
  id: string;
  resourceId: string; // format: `<resource_type>>:<id>`
  type: ChargeType;
  amount: string;
  createdAt: number;
};

export enum ChargeType {
  INDEXING = 'INDEXING',
}

export const IndexingFee = 0.005; // 50 bps
