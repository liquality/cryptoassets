import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import validateBitcoinAddress from 'bitcoin-address-validation'

import { Chain, ChainId } from './types'
import { isValidNearTx, isValidNearAddress, isValidHex, toLowerCaseWithout0x } from './common'

const chains: { [key in ChainId]: Chain } = {
  [ChainId.Bitcoin]: {
    name: 'Bitcoin',
    code: 'BTC',
    nativeAsset: 'BTC',
    fees: {
      unit: 'sat/b'
    },
    safeConfirmations: 1,
    // TODO: include network types in validation
    isValidAddress: (address) => !!validateBitcoinAddress(address),
    formatAddress: (address) => address,
    isValidTransactionHash: (hash: string) => isValidHex(hash),
    formatTransactionHash: (hash: string) => toLowerCaseWithout0x(hash)
  },
  [ChainId.Ethereum]: {
    name: 'Ethereum',
    code: 'ETH',
    nativeAsset: 'ETH',
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 3,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress,
    isValidTransactionHash: (hash: string) => isValidHex(hash),
    formatTransactionHash: (hash: string) => toLowerCaseWithout0x(hash)
  },
  [ChainId.Rootstock]: {
    name: 'Rootstock',
    code: 'RSK',
    nativeAsset: 'RBTC',
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 5,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress,
    isValidTransactionHash: (hash: string) => isValidHex(hash),
    formatTransactionHash: (hash: string) => toLowerCaseWithout0x(hash)
  },
  [ChainId.BinanceSmartChain]: {
    name: 'Binance Smart Chain',
    code: 'BSC',
    nativeAsset: 'BNB',
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 5,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress,
    isValidTransactionHash: (hash: string) => isValidHex(hash),
    formatTransactionHash: (hash: string) => toLowerCaseWithout0x(hash)
  },
  [ChainId.Near]: {
    name: 'Near',
    code: 'NEAR',
    nativeAsset: 'NEAR',
    fees: {
      unit: 'TGas'
    },
    safeConfirmations: 10,
    isValidAddress: (address) => isValidNearAddress(address),
    formatAddress: (address) => address,
    isValidTransactionHash: (hash: string) => isValidNearTx(hash),
    formatTransactionHash: (hash: string) => hash
  },
  [ChainId.Polygon]: {
    name: 'Polygon',
    code: 'POLYGON',
    nativeAsset: 'POLYGON',
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 5,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress,
    isValidTransactionHash: (hash: string) => isValidHex(hash),
    formatTransactionHash: (hash: string) => toLowerCaseWithout0x(hash)
  }
}

function isEthereumChain(chain: ChainId) {
  return [ChainId.BinanceSmartChain, ChainId.Ethereum, ChainId.Rootstock, ChainId.Polygon].includes(chain)
}

export { chains, isEthereumChain }
