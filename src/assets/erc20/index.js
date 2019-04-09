import * as ethUtil from 'ethereumjs-util'
import tokensData from './tokens.json'

const tokens = tokensData.map(tokenData => ({
  ...tokenData,
  type: 'erc20',
  isValidAddress: ethUtil.isValidAddress,
  formatAddress: ethUtil.toChecksumAddress
}))

export default tokens
