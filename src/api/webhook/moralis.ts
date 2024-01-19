// (https://docs.moralis.io/streams-api/evm/response-body)

export type MoralisStreamsWebhookEvent = {
  confirmed: boolean;
  chainId: string;
  abi: any[];
  streamId: string;
  tag: string;
  retries: number;
  block: Record<string, any>;
  logs: Record<string, any>[];
  txs: MoralisStreamsNativeTransaction[];
  txsInternal: Record<string, any>[];
  erc20Transfers: MoralisStreamsERC20Transfer[];
  erc20Approvals: Record<string, any>[];
  nftApprovals: Record<string, any>;
  nftTransfers: Record<string, any>[];
};

export type MoralisStreamsNativeTransaction = {
  hash: string;
  gas: string;
  gasPrice: string;
  nonce: string;
  input: string;
  transactionIndex: string;
  fromAddress: string;
  toAddress: string;
  value: string;
  type: string;
  v: string;
  r: string;
  s: string;
  receiptCumulativeGasUsed: string;
  receiptGasUsed: string;
  receiptContractAddress: string;
  receiptRoot: string;
  receiptStatus: string;
};

export type MoralisStreamsERC20Transfer = {
  transactionHash: string;
  logIndex: string;
  contract: string;
  from: string;
  to: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: string;
  valueWithDecimals: string;
};
