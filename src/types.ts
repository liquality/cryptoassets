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
}

export type AssetType = 'native' | 'erc20'

export enum ChainId {
  Bitcoin = 'bitcoin',
  Ethereum = 'ethereum',
  Rootstock = 'rsk',
  BinanceSmartChain = 'bsc'
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
}
