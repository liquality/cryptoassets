import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'

export default {
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
}
