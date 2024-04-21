/**
 * Billing specific events.
 */
export enum BillingEventName {
  // UI
  SelectManagePlan = 'Select Manage Plan',
  SelectUpgradePlan = 'Select Upgrade Plan',

  // API
  BillingChargeSucceeded = 'Billing Charge Succeeded',
  BillingChargeFailed = 'Billing Charge Failed',
}
