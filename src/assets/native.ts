import { TESTNET_NATIVE } from './testnet'
import { AssetMap, ChainId } from '../types'

const nativeAssets: AssetMap = {
  BTC: {
    name: 'Bitcoin',
    chain: ChainId.Bitcoin,
    type: 'native',
    code: 'BTC',
    coinGeckoId: 'bitcoin',
    color: '#f7931a',
    decimals: 8
  },
  BCH: {
    name: 'Bitcoin Cash',
    chain: ChainId.BitcoinCash,
    type: 'native',
    code: 'BCH',
    coinGeckoId: 'bitcoin-cash',
    color: '#a1db5e',
    decimals: 8
  },
  ETH: {
    name: 'Ether',
    chain: ChainId.Ethereum,
    type: 'native',
    code: 'ETH',
    coinGeckoId: 'ethereum',
    color: '#627eea',
    decimals: 18
  },
  RBTC: {
    name: 'Rootstock BTC',
    chain: ChainId.Rootstock,
    type: 'native',
    code: 'RBTC',
    coinGeckoId: 'rootstock',
    color: '#006e3c',
    decimals: 18
  },
  BNB: {
    name: 'Binance Coin',
    chain: ChainId.BinanceSmartChain,
    type: 'native',
    code: 'BNB',
    coinGeckoId: 'binancecoin',
    color: '#f9a825',
    decimals: 18
  },
  NEAR: {
    name: 'Near',
    chain: ChainId.Near,
    type: 'native',
    code: 'NEAR',
    coinGeckoId: 'near',
    color: '#000000',
    decimals: 24
  },
  SOL: {
    name: 'Solana',
    chain: ChainId.Solana,
    type: 'native',
    code: 'SOL',
    coinGeckoId: 'solana',
    color: '#008080',
    decimals: 9
  },
  MATIC: {
    name: 'Matic',
    chain: ChainId.Polygon,
    type: 'native',
    code: 'MATIC',
    coinGeckoId: 'matic-network',
    color: '#8247E5',
    decimals: 18
  },
  ARBETH: {
    name: 'Arbitrum ETH',
    chain: ChainId.Arbitrum,
    type: 'native',
    code: 'ARBETH',
    coinGeckoId: 'ethereum',
    color: '#28A0EF',
    decimals: 18,
    matchingAsset: 'ETH'
  },
  FUSE: {
    name: 'Fuse Network',
    chain: ChainId.Fuse,
    type: 'native',
    code: 'FUSE',
    coinGeckoId: 'fuse',
    color: '#46e8b6',
    decimals: 18
  }
}

const testnetNativeAssets = TESTNET_NATIVE.reduce((assets: AssetMap, asset: string) => {
  return Object.assign(assets, {
    [asset]: {
      ...nativeAssets[asset]
    }
  })
}, {})

export { nativeAssets, testnetNativeAssets }
