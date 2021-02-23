import validateBitcoinAddress from 'bitcoin-address-validation'

export default {
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
}
