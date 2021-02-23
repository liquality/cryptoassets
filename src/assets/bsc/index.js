import _ from 'lodash'
import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import networkAsset from './network'
import tokensData from './tokens.json'
import { mapCurrencyConverters } from '../mapCurrencyConverters'

const tokens = _.mapValues(tokensData, token => ({
  ...token,
  network: 'bsc',
  safeConfirmations: networkAsset.safeConfirmations,
  type: 'bep20',
  fees: {
    unit: 'gwei'
  },
  isValidAddress: isValidAddress,
  formatAddress: toChecksumAddress
})
)

const assets = mapCurrencyConverters({
  BNB: networkAsset,
  ...tokens
})

export default assets
