export type Positions = {
  userId: string; // Primary Key
  positionIds: number[];
  createdAt: number; // Unix Timestamp
  updatedAt: number; // Unix Timestamp
};
