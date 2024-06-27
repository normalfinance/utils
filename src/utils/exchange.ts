import type { Exchange } from '../database';

export const FeeAsset = 'SOL';

export const getFeeAddress = (exchangeType: Exchange['type']) =>
  exchangeType === 'coinbase'
    ? 'billing@normalfinance.io'
    : '7cbDHP5ksonpWJXmTWGsuD8yKVTxC4RfZ26JCYbSxRqX';
