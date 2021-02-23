import _ from 'lodash'
import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import networkAsset from './network'
import tokensData from './tokens.json'
import { mapCurrencyConverters } from '../mapCurrencyConverters'

const tokens = _.mapValues(tokensData, token => ({
  ...token,
  network: 'ethereum',
  safeConfirmations: networkAsset.safeConfirmations,
  type: 'erc20',
  fees: {
    unit: 'gwei'
  },
  isValidAddress: isValidAddress,
  formatAddress: toChecksumAddress
})
)

const assets = mapCurrencyConverters({
  ETH: networkAsset,
  ...tokens
})

export default assets
