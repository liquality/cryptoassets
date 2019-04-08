import * as ethUtil from 'ethereumjs-util'

export default {
  'btc': {
    name: 'Bitcoin',
    type: 'network',
    code: 'BTC',
    decimals: 8,
    // TODO: include network types in validation
    isValidAddress: address => /^[13mn][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address),
    formatAddress: address => address
  },
  'eth': {
    name: 'Ethereum',
    type: 'network',
    code: 'ETH',
    decimals: 18,
    isValidAddress: ethUtil.isValidAddress,
    formatAddress: ethUtil.toChecksumAddress
  }
}