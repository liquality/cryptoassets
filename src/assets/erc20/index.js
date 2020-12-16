import _ from 'lodash'
import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import tokensData from './tokens.json'

const tokens = _.mapValues(tokensData, tokenData => ({
  ...tokenData,
  type: 'erc20',
  fees: {
    unit: 'gwei'
  },
  isValidAddress: isValidAddress,
  formatAddress: toChecksumAddress
}))

export default tokens
