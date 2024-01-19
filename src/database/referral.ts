export type Referral = {
  userId: string; // Primary Key
  referralCode: string;
  referrals: NewReferral[];
  createdAt: number; // Unix Timestamp
  updatedAt: number; // Unix Timestamp
};

export type NewReferral = {
  userId: string;
  createdAt: number; // Unix Timestamp
};
