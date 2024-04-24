/**
 * Divestment specific events.
 */
export enum DivestmentEventName {
  // UI
  SubmitDivestment = 'Submit Divestment',

  //  API
  DivestmentCreated = 'Divestment Created',
  DivestmentSucceeded = 'Divestment Succeeded',
  DivestmentEnrichSucceeded = 'Divestment Enrich Succeeded',
  DivestmentEnrichFailed = 'Divestment Enrich Failed',
  DivestmentFailed = 'Divestment Failed',
}