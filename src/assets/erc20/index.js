import _ from 'lodash'
import * as ethUtil from 'ethereumjs-util'
import tokensData from './tokens.json'

const tokens = _.mapValues(tokensData, tokenData => ({
  ...tokenData,
  type: 'erc20',
  fees: {
    unit: 'gwei'
  },
  isValidAddress: ethUtil.isValidAddress,
  formatAddress: ethUtil.toChecksumAddress
}))

export default tokens
