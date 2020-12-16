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
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress
  }
}
