export enum TransactionalEmailTemplateId {
  // Exchange
  ExchangeConnected = 'exchange_connected',
  ExchangeDisconnected = 'exchange_disconnected',

  // Index
  IndexCreated = 'index_created',
  IndexUpdated = 'index_updated',
  IndexDeleted = 'index_deleted',

  // Investment
  InvestmentCreated = 'investment_created',
  InvestmentCancelled = 'investment_cancelled',
  InvestmentSucceeded = 'investment_succeeded',
  InvestmentFailed = 'investment_failed',

  // Divestment
  DivestmentCreated = 'divestment_created',
  DivestmentCancelled = 'divestment_cancelled',
  DivestmentSucceeded = 'divestment_succeeded',
  DivestmentFailed = 'divestment_failed',

  // Referral
  ReferralCreated = 'referral_created',
  ReferralCodeCreated = 'referral_code_created',

  // Billing
  BillingChargeSucceeded = 'billing_charge_succeeded',
  BillingChargeFailed = 'billing_charge_failed',
  BillingChargeFailedRequires2fa = 'billing_charge_failed_requires_2fa',

  // Gift
  GiftCreated = 'gift_created',
  GiftRedemptionSucceededSender = 'gift_redemption_succeeeded_sender',
  GiftRedemptionFailedSender = 'gift_redemption_failed_sender',
  GiftRedemptionSucceededRecipient = 'gift_redemption_succeeded_recipient',
  GiftRedemptionFailedRecipient = 'gift_redemption_failed_recipient',

  // Schedule
  ScheduleCreated = 'schedule_created',
  ScheduleUpdated = 'schedule_updated',
  ScheduleDeleted = 'schedule_deleted',
  ScheduleExecutionSucceeded = 'schedule_execution_succeeded',
  ScheduleExecutionFailed = 'schedule_execution_failed',
}

export type TransactionalEmailArgs = {
  // Exchange
  [TransactionalEmailTemplateId.ExchangeConnected]: {
    type: string;
  };
  [TransactionalEmailTemplateId.ExchangeDisconnected]: {
    type: string;
  };

  // Index
  [TransactionalEmailTemplateId.IndexCreated]: {
    name: string;
  };
  [TransactionalEmailTemplateId.IndexUpdated]: {
    name: string;
  };
  [TransactionalEmailTemplateId.IndexDeleted]: {
    name: string;
  };

  // Investment
  [TransactionalEmailTemplateId.InvestmentCreated]: {
    index: string;
    amount: string;
  };
  [TransactionalEmailTemplateId.InvestmentCancelled]: {
    index: string;
    amount: string;
  };
  [TransactionalEmailTemplateId.InvestmentSucceeded]: {
    index: string;
    amount: string;
  };
  [TransactionalEmailTemplateId.InvestmentFailed]: {
    index: string;
    amount: string;
  };

  // Divestment
  [TransactionalEmailTemplateId.DivestmentCreated]: {
    index: string;
    portion: string;
  };
  [TransactionalEmailTemplateId.DivestmentCancelled]: {
    index: string;
    portion: string;
  };
  [TransactionalEmailTemplateId.DivestmentSucceeded]: {
    index: string;
    portion: string;
  };
  [TransactionalEmailTemplateId.DivestmentFailed]: {
    index: string;
    portion: string;
  };

  // Referral
  [TransactionalEmailTemplateId.ReferralCreated]: {
    code: string;
  };
  [TransactionalEmailTemplateId.ReferralCodeCreated]: {
    code: string;
  };

  // Billing
  [TransactionalEmailTemplateId.BillingChargeSucceeded]: {
    amount: string;
    asset: string;
    address: string;
  };
  [TransactionalEmailTemplateId.BillingChargeFailed]: {
    amount: string;
  };
  [TransactionalEmailTemplateId.BillingChargeFailedRequires2fa]: {
    amount: string;
  };

  // Gift
  [TransactionalEmailTemplateId.GiftCreated]: {
    asset: string;
    amount: string;
    recipient: string;
    action: string;
  };
  [TransactionalEmailTemplateId.GiftRedemptionSucceededSender]: {
    asset: string;
    amount: string;
    recipient: string;
    action: string;
  };
  [TransactionalEmailTemplateId.GiftRedemptionFailedSender]: {
    asset: string;
    amount: string;
    recipient: string;
    action: string;
  };
  [TransactionalEmailTemplateId.GiftRedemptionSucceededRecipient]: {
    asset: string;
    amount: string;
    recipient: string;
    action: string;
  };
  [TransactionalEmailTemplateId.GiftRedemptionFailedRecipient]: {
    asset: string;
    amount: string;
    recipient: string;
    action: string;
  };

  // Schedule
  [TransactionalEmailTemplateId.ScheduleCreated]: {
    asset: string;
    amount: string;
    amountType: string;
    frequency: string;
  };
  [TransactionalEmailTemplateId.ScheduleUpdated]: {
    asset: string;
    frequency: string;
  };
  [TransactionalEmailTemplateId.ScheduleDeleted]: {
    asset: string;
    frequency: string;
  };
  [TransactionalEmailTemplateId.ScheduleExecutionSucceeded]: {
    asset: string;
    frequency: string;
    amount: string;
  };
  [TransactionalEmailTemplateId.ScheduleExecutionFailed]: {
    asset: string;
    frequency: string;
    amount: string;
  };
};
