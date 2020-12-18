import _ from 'lodash'
import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'

const tokens = _.mapValues({ ...rskTokens, ...ethereumTokens }, tokenData => ({
  ...tokenData,
  type: 'erc20',
  fees: {
    unit: 'gwei'
  },
  isValidAddress: isValidAddress,
  formatAddress: toChecksumAddress
}))

export default tokens
