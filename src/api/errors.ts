export enum HTTPErrorMessage {
  ONLY_GET = 'Only GET is accepted',
  ONLY_POST = 'Only POST is accepted',
  ONLY_PUT = 'Only PUT is accepted',
  ONLY_DELETE = 'Only DELETE is accepted',
}

export enum EventErrorMessage {
  INVALID_PARAMETERS = 'Invalid parameters',
}

export enum DatabaseErrorMessage {
  NO_INDEX_FOUND = 'No index found',
  NO_EXCHANGE_FOUND = 'No exchange found',
  DUPLICATE_INVESTMENT = 'Investment already processed',
  INDEX_EXISTS = 'Index already exists',
}

export enum ExchangeErrorMessage {
  CANNOT_CREATE_CLIENT = 'Cannot create client',
  NSF = 'Insufficient funds',
  BELOW_ORDER_MINIMUM = 'Order value below exchange limit',
}

export enum NormalErrorMessage {
  ONLY_USD = 'Investments limited to USD',
  UNSUPPORTED_ASSET = 'Unsupported',
  ONLY_COINBASE_DEPOSITS = 'Deposits only supported for Coinbase',
  UNSUPPORTED_EXCHANGE = 'Unsupported exchange',
}

export enum AWSErrorMessage {
  CANNOT_CREATE_SSM = 'Cannot create SSM client',
  SECRET_NOT_FOUND = 'Secret not found',
  UNABLE_TO_GET_SECRET = 'Unable to access secret',
  UNABLE_TO_START_SFN = 'Unable to start start state machine',
  CANNOT_CREATE_LAMBDA = 'Cannot create Lambda client',
  UNABLE_TO_INVOKE_LAMBDA = 'Unable to invoke Lambda',
  UNABLE_TO_DECRYPT_KEY = 'Unable to decrypt key',
}

export enum SubscriptionErrorMessage {
  EXCHANGE_LIMIT = 'Upgrade to add more exchanges',
  ACCOUNT_LIMIT = 'Upgrade to add more accounts per exchange',
  DISABLED_INDEX = 'Upgrade to invest in this index',
  FAILED_PAYMENT = 'Account delinquent',
  DISABLED_CUSTOM_INDEXES = 'Upgrade to create custom indexes',
  DISABLED_PUBLIC_CUSTOM_INDEXES = 'Upgrade to create public custom indexes',
  CUSTOM_INDEX_LIMIT = 'Upgrade to add more custom indexes',
  FREE_PLAN_MAX_INVESTMENT = 'Add a payment method to invest more',
}
