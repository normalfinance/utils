/**
 * Index specific events.
 */
export enum IndexEventName {
  IndexInvestConfirmed = 'Index Invest Confirmed', // Received investment request
  IndexInvestFulfilled = 'Index Invest Fulfilled', // All orders executed
  IndexInvestFailed = 'Index Invest Failed', // 100% of the orders failed or the investment failed for some other reason

  IndexDivestConfirmed = 'Index Divest Confirmed',
  IndexDivestFulfilled = 'Index Divest Fulfilled',
  IndexDivestFailed = 'Index Divest Failed',

  IndexCreateConfirmed = 'Index Create Confirmed',
  IndexUpdateConfirmed = 'Index Update Confirmed',
  IndexDeleteConfirmed = 'Index Delete Confirmed',
}
