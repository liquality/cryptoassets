export interface Chain {
  name: string
  code: string
  nativeAsset: string
  fees: {
    unit: string
  }
  safeConfirmations: number
  isValidAddress: (address: string) => boolean
  formatAddress: (address: string) => string
  isValidTransactionHash: (hash: string) => boolean
  formatTransactionHash: (hash: string) => string
}

export type AssetType = 'native' | 'erc20'

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
  Fuse = 'fuse'
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
}

export type AssetMap = Record<string, Asset>
