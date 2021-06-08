import { Asset, ChainId } from '../types'

const nativeAssets: { [index: string]: Asset } = {
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
  POLYGON: {
    name: 'Polygon',
    chain: ChainId.Polygon,
    type: 'native',
    code: 'POLYGON',
    coinGeckoId: 'matic-network',
    color: '#8247E5',
    decimals: 18
  }
}

export default nativeAssets
