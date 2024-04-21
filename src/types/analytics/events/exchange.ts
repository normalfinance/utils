/**
 * Exchange specific events.
 */
export enum ExchangeEventName {
  // UI
  SubmitConnectExchange = 'Submit Connect Exchange',
  SubmitDisconnectExchange = 'Submit Disconnect Exchange',

  SubmitExchangeDeposit = 'Submit Exchange Deposit',
  SubmitExchangeOrders = 'Submit Exchange Orders',
  SubmitExchangeTransaction = 'Submit Exchange Transaction',

  // API
  ExchangeConnected = 'Exchange Connected',
  ExchangeDisconnected = 'Exchange Disconnected',
  ExchangeDepositCreated = 'Exchange Deposit Created',
  ExchangeOrdersCreated = 'Exchange Orders Created',
  ExchangeTransactionCreated = 'Exchange Transaction Created',
  ExchangeAddressCreated = 'Exchange Address Created',
}
