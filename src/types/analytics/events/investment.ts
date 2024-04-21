/**
 * Investment specific events.
 */
export enum InvestmentEventName {
  // UI
  SubmitInvestment = 'Submit Investment',

  // API
  InvestmentCreated = 'Investment Created',
  InvestmentSucceeded = 'Investment Succeeded',
  InvestmentEnrichSucceeded = 'Investment Enrich Succeeded',
  InvestmentEnrichFailed = 'Investment Enrich Failed',
  InvestmentFailed = 'Investment Failed',
}
