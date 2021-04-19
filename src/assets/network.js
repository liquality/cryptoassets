import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import validateBitcoinAddress from 'bitcoin-address-validation'

export default {
  BTC: {
    name: 'Bitcoin',
    type: 'network',
    code: 'BTC',
    coinGeckoId: 'bitcoin',
    color: '#f7931a',
    decimals: 8,
    fees: {
      unit: 'sat/b'
    },
    safeConfirmations: 1,
    // TODO: include network types in validation
    isValidAddress: address => !!validateBitcoinAddress(address),
    formatAddress: address => address
  },
  ETH: {
    name: 'Ether',
    type: 'network',
    code: 'ETH',
    coinGeckoId: 'ethereum',
    color: '#627eea',
    decimals: 18,
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 3,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress
  },
  RBTC: {
    name: 'Rootstock',
    type: 'network',
    code: 'RBTC',
    coinGeckoId: 'rootstock',
    color: '#006e3c',
    decimals: 18,
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 5,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress
  },
  BNB: {
    name: 'Binance Smart Chain',
    type: 'network',
    code: 'BNB',
    coinGeckoId: 'binancecoin',
    color: '#f9a825',
    decimals: 18,
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 5,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress
  },
  NEAR: {
    name: 'Near',
    type: 'network',
    code: 'NEAR',
    coinGeckoId: 'near',
    color: '#000000',
    decimals: 24,
    fees: {
      unit: 'TGas'
    },
    safeConfirmations: 1,
    // TODO find the right validator and address formatter
    isValidAddress: address => address,
    formatAddress: address => address
  }
}
