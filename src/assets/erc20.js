import * as ethUtil from 'ethereumjs-util'

export default {
  'dai': {
    name: 'Dai',
    type: 'erc20',
    code: 'DAI',
    decimals: 18,
    isValidAddress: ethUtil.isValidAddress,
    formatAddress: ethUtil.toChecksumAddress
  }
}