import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'

export default {
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
}
