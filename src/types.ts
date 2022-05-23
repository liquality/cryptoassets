export interface Chain {
  name: string
  code: string
  nativeAsset: string
  fees: {
    unit: string
  }
  safeConfirmations: number
  txFailureTimeout: number
  evmCompatible: boolean
  hasTokens: boolean
  isMultiLayered: boolean
  hasFixedFee: boolean
  isValidAddress: (address: string, network?: string) => boolean
  formatAddress: (address: string, network?: string) => string
  isValidTransactionHash: (hash: string) => boolean
  formatTransactionHash: (hash: string) => string
}

export interface MultiLayerFee {
  L1: number
  L2: number
}

export enum AssetTypes {
  native = 'native',
  erc20 = 'erc20'
}

export type AssetType = AssetTypes.native | AssetTypes.erc20

export enum ChainId {
  Bitcoin = 'bitcoin',
  BitcoinCash = 'bitcoin_cash',
  Ethereum = 'ethereum',
  Rootstock = 'rsk',
  BinanceSmartChain = 'bsc',
  Near = 'near',
  Polygon = 'polygon',
  Arbitrum = 'arbitrum',
  Solana = 'solana',
  Fuse = 'fuse',
  Terra = 'terra',
  Avalanche = 'avalanche',
  Optimism = 'optimism'
}

export interface Asset {
  name: string
  chain: ChainId
  type: AssetType
  code: string
  decimals: number
  coinGeckoId?: string
  color?: string
  contractAddress?: string // ERC20 only
  matchingAsset?: string
  feeAsset?: string
  sendGasLimit: number | MultiLayerFee
}

export type AssetMap = Record<string, Asset>
