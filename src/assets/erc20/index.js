import _ from 'lodash'
import * as ethUtil from 'ethereumjs-util'
import tokensData from './tokens.json'

tokensData.midman = {
  name: 'Middleman',
  code: 'MIDMAN',
  decimals: 18
}

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
