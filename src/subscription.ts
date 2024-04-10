import Decimal from 'decimal.js';

export enum SubscriptionType {
  FREE = 'free',
  PREMIUM = 'premium',
  ADVANCED = 'advanced',
}

export enum SubscriptionIndexFeeTierFee {
  Tier1 = 0.005,
  Tier2 = 0.0025,
  Tier3 = 0.002,
  Tier4 = 0.0015,
}

export const getIndexFeeTier = (annualRollingTotal: Decimal): Decimal => {
  if (annualRollingTotal.lessThanOrEqualTo(50_000)) {
    return new Decimal(SubscriptionIndexFeeTierFee.Tier1);
  }
  if (annualRollingTotal.lessThanOrEqualTo(500_000)) {
    return new Decimal(SubscriptionIndexFeeTierFee.Tier2);
  }
  if (annualRollingTotal.lessThanOrEqualTo(1_000_000)) {
    return new Decimal(SubscriptionIndexFeeTierFee.Tier3);
  }
  return new Decimal(SubscriptionIndexFeeTierFee.Tier4);
};

export type SubscriptionLimits = {
  exchangeAccounts: number;
  customIndexEnabled: boolean;
  lendingOptions: string;
};

export type SubscriptionFees = {
  lending: number;
};

export type Subscription = {
  type: SubscriptionType;
  paymentLink: string;
  price: number;
  limits: SubscriptionLimits;
  fees: SubscriptionFees;
  referralBonus: number;
  extras: string;
};

export const Subscriptions: Subscription[] = [
  {
    type: SubscriptionType.FREE,
    paymentLink: 'https://www.normalfinance.io/pricing',
    price: 0,
    limits: {
      exchangeAccounts: 1,
      customIndexEnabled: false,
      lendingOptions: 'Basic lending (~10% APY)',
    },
    fees: {
      lending: 0.1,
    },
    referralBonus: 0.1,
    extras: '24/7 expert support and real-time notifications',
  },
  {
    type: SubscriptionType.PREMIUM,
    paymentLink: 'https://buy.stripe.com/aEUg2cdMw4ZqbrW007',
    price: 9.97,
    limits: {
      exchangeAccounts: 5,
      customIndexEnabled: true,
      lendingOptions: 'Advanced lending (~30% APY)',
    },
    fees: {
      lending: 0.05,
    },
    referralBonus: 0.2,
    extras:
      '24/7 expert support, create custom indexes, real-time notifications, and more',
  },
  {
    type: SubscriptionType.ADVANCED,
    paymentLink: 'https://buy.stripe.com/aEUcQ0fUE4Zq1RmfZ7',
    price: 24.97,
    limits: {
      exchangeAccounts: 100, // technically unlimited
      customIndexEnabled: true,
      lendingOptions: 'Unlimited lending (50%+ APY)',
    },
    fees: {
      lending: 0.03,
    },
    referralBonus: 0.3,
    extras:
      '24/7 expert support, create custom indexes, earn from custom indexes, real-time notifications, and more',
  },
];

export const subscriptionByType = {
  [SubscriptionType.FREE]: Subscriptions[0],
  [SubscriptionType.PREMIUM]: Subscriptions[1],
  [SubscriptionType.ADVANCED]: Subscriptions[2],
};
