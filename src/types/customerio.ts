export enum TransactionalEmailTemplateId {
  /**
   * Exchange Emails
   */
  ExchangeConnected = 'exchange_connected',
  ExchangeDisconnected = 'exchange_disconnected',

  /**
   * Index Emails
   */
  IndexInvestmentCreated = 'index_investment_created',
  IndexInvestmentSucceeded = 'index_investment_succeeded',
  IndexInvestmentFailed = 'index_investment_failed',

  IndexDivestmentCreated = 'index_divestment_created',
  IndexDivestmentSucceeded = 'index_divestment_succeeded',
  IndexDivestmentFailed = 'index_divestment_failed',

  IndexCreated = 'index_created',
  IndexUpdated = 'index_updated',
  IndexDeleted = 'index_deleted',

  /**
   * Referral Emails
   */
  ReferralCreated = 'referral_created',
  ReferralCodeCreated = 'referral_code_created',

  /**
   * Charge Emails
   */
  ChargeSucceeded = 'charge_succeeded',
  ChargeFailed = 'charge_failed',

  /**
   * Gift Emails
   */
  GiftCreated = 'gift_created',
  GiftRedemptionSucceededSender = 'gift_redemption_succeeeded_sender',
  GiftRedemptionFailedSender = 'gift_redemption_failed_sender',
  GiftRedemptionSucceededRecipient = 'gift_redemption_succeeded_recipient',
  GiftRedemptionFailedRecipient = 'gift_redemption_failed_recipient',
}

export type TransactionalEmailArgs = {
  /**
   * Exchange Emails
   */
  [TransactionalEmailTemplateId.ExchangeConnected]: {
    type: string;
  };
  [TransactionalEmailTemplateId.ExchangeDisconnected]: {
    type: string;
  };

  /**
   * Index Emails
   */
  [TransactionalEmailTemplateId.IndexInvestmentCreated]: {
    index: string;
    amount: string;
  };
  [TransactionalEmailTemplateId.IndexInvestmentSucceeded]: {
    index: string;
    amount: string;
  };
  [TransactionalEmailTemplateId.IndexInvestmentFailed]: {
    index: string;
    amount: string;
  };

  [TransactionalEmailTemplateId.IndexDivestmentCreated]: {
    index: string;
    portion: string;
  };
  [TransactionalEmailTemplateId.IndexDivestmentSucceeded]: {
    index: string;
    portion: string;
  };
  [TransactionalEmailTemplateId.IndexDivestmentFailed]: {
    index: string;
    portion: string;
  };

  [TransactionalEmailTemplateId.IndexCreated]: {
    name: string;
  };
  [TransactionalEmailTemplateId.IndexUpdated]: {
    name: string;
  };
  [TransactionalEmailTemplateId.IndexDeleted]: {
    name: string;
  };

  /**
   * Referral Emails
   */
  [TransactionalEmailTemplateId.ReferralCreated]: {
    code: string;
  };
  [TransactionalEmailTemplateId.ReferralCodeCreated]: {
    code: string;
  };

  /**
   * Charge Emails
   */
  [TransactionalEmailTemplateId.ChargeSucceeded]: {
    amount: string;
    asset: string;
    address: string;
  };
  [TransactionalEmailTemplateId.ChargeFailed]: {
    amount: string;
  };

  /**
   * Gift Emails
   */
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
};
