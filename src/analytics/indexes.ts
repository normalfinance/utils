/**
 * Index specific events.
 */
export enum IndexEventName {
  IndexInvestmentCreated = 'Index Investment Created',
  IndexInvestmentSucceeded = 'Index Investment Succeeded',
  IndexInvestmentEnrichSucceeded = 'Index Investment Enrich Succeeded',
  IndexInvestmentEnrichFailed = 'Index Investment Enrich Failed',
  IndexInvestmentFailed = 'Index Investment Failed',

  IndexDivestmentCreated = 'Index Divestment Created',
  IndexDivestmentSucceeded = 'Index Divestment Succeeded',
  IndexDivestmentEnrichSucceeded = 'Index Divestment Enrich Succeeded',
  IndexDivestmentEnrichFailed = 'Index Divestment Enrich Failed',
  IndexDivestmentFailed = 'Index Divestment Failed',

  IndexCreated = 'Index Created',
  IndexUpdated = 'Index Updated',
  IndexDeleted = 'Index Deleted',
}
