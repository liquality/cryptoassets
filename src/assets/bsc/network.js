import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'

export default {
  name: 'Binance Smart Chain',
  type: 'network',
  code: 'BNB',
  coinGeckoId: 'binance-coin',
  color: '#f9a825',
  decimals: 18,
  fees: {
    unit: 'gwei'
  },
  safeConfirmations: 5,
  isValidAddress: isValidAddress,
  formatAddress: toChecksumAddress
}
