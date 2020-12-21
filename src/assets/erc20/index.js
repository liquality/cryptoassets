import _ from 'lodash'
import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import networkAssets from '../network'
import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'

const rskTokensData = _.mapValues(rskTokens, tokenData => ({
  ...tokenData,
  network: 'rsk',
  safeConfirmations: networkAssets.RBTC.safeConfirmations
}))

const ethereumTokensData = _.mapValues(ethereumTokens, tokenData => ({
  ...tokenData,
  network: 'ethereum',
  safeConfirmations: networkAssets.ETH.safeConfirmations
}))

console.log(rskTokensData)

const tokens = _.mapValues({ ...rskTokensData, ...ethereumTokensData }, tokenData => ({
  ...tokenData,
  type: 'erc20',
  fees: {
    unit: 'gwei'
  },
  isValidAddress: isValidAddress,
  formatAddress: toChecksumAddress
}))

export default tokens
