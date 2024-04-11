/**
 * All events.
 */
export enum UIEventName {
  OnboardingNext = 'Onboarding Next',
  OnboardingBack = 'Onboarding Back',
  OnboardingCreateExchange = 'Onboarding Create Exchange',
  OnboardingCreateApiKey = 'Onboarding Create API Key',
  OnboardingOpenConnect = 'Onboarding Open Connect',
  OnboardingLearnMoreLending = 'Onboarding Learn More Lending',
  OnboardingOpenLendingDeposit = 'Onboarding Open Lending Deposit',

  // OPEN
  OpenInvest = 'Open Invest',
  OpenIndexAssets = 'Open Index Assets',
  OpenDisconnectExchange = 'Open Disconnect Exchange',
  OpenConnectExchange = 'Open Connect Exchange',
  OpenRequestAsset = 'Open Request Asset',
  OpenRequestExchange = 'Open Request Exchange',
  OpenFeedback = 'Open Feedback',
  OpenDeposit = 'Open Deposit',
  OpenTrade = 'Open Trade',
  OpenLendingDeposit = 'Open Lending Deposit',
  OpenLendingWithdraw = 'Open Lending Withdraw',
  OpenSend = 'Open Send',
  OpenReceive = 'Open Receive',
  OpenGift = 'Open Gift',
  OpenGiftRedeem = 'Open Gift Redeem',

  // SUBMIT
  SubmitInvest = 'Submit Invest',
  SubmitDeposit = 'Submit Deposit',
  SubmitConnectExchange = 'Submit Connect Exchange',
  SubmitDisconnectExchange = 'Submit Disconnect Exchange',
  SubmitOrder = 'Submit Order',
  RequestLendingWithdrawal = 'Request Lending Withdrawal',
  SubmitCreateCustomReferralCode = 'Submit Create Custom Referral Code',
  SubmitRetryPayment = 'Submit Retry Payment',
  SubmitGiftRedeem = 'Submit Gift Redeem',

  // SELECT
  PortfolioFilter = 'Portfolio Filter',
  InvestSelectIndex = 'Invest Select Index',
  InvestSelectAmount = 'Invest Select Amount',
  ChangedLocale = 'Changed Locale',
  ViewOrdersFromInvestment = 'View Orders from Investment',

  SelectBilling = 'Select Billing Plan',
  SelectManagePlan = 'Select Manage Plan',
  SelectUpgradePlan = 'Select Upgrade Plan',
  // FAILED_PAYMENT_ALERT_VIEW_BILLING = 'Failed Payment Alert - View Billing',
  BadSubscriptionAlertViewBilling = 'Bad Subscription Alert - View Billing',
  FailedChargeAlertViewExchanges = 'Failed Charge Alert - View Exchanges',
  OpenHowToUpdateApiKey = 'Open How to Update API Key',

  // OTHER
  REDIRECTED = 'Redirected',
  CopyReferralLink = 'Copy Referral Link',
  CopyAddress = 'Copy Address',

  // UNCATEGORIZED
  IndexFilter = 'Index Filter',
  IndexChangeView = 'Index Change View',
  IndexSelect = 'Index Select',
  IndexSelectAll = 'Index Select All',
  OpenIndexDetails = 'Open Index Details',
  OpenIndexDetailsInvest = 'Open Index Details Invest',
  OpenIndexSHARE = 'Open Index Share',
  OpenIndexDELETE = 'Open Index Delete',
  OpenCREATEIndex = 'Open Create Index',
  OpenEDITIndex = 'Open Edit Index',

  CreateIndex = 'Create Index',
  UpdateIndex = 'Update Index',
  DeleteIndex = 'Delete Index',
  ShareIndexViaSocal = 'Share Index via Social',
  SendIndexEmailInvite = 'Send Index Email Invite',
  CopyIndexLink = 'Copy Index Link',
}
