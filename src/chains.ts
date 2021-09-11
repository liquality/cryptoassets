import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import validateBitcoinAddress from 'bitcoin-address-validation'

import { Chain, ChainId } from './types'
import {
  isValidNearTx,
  isValidNearAddress,
  isValidSolanaAddress,
  isValidBitcoinCashAddress,
  formatBitcoinCashAddress,
  isValidHex,
  isValidSolanaTx,
  toLowerCaseWithout0x
} from './common'

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
  [ChainId.BitcoinCash]: {
    name: 'Bitcoin Cash',
    code: 'BCH',
    nativeAsset: 'BCH',
    fees: {
      unit: 'sat/b'
    },
    safeConfirmations: 1,
    // TODO: include network types in validation
    isValidAddress: (address) => isValidBitcoinCashAddress(address),
    formatAddress: (address) => formatBitcoinCashAddress(address),
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
  [ChainId.Solana]: {
    name: 'Solana',
    code: 'SOL',
    nativeAsset: 'SOL',
    fees: {
      unit: 'Lamports'
    },
    safeConfirmations: 31,
    isValidAddress: (address) => isValidSolanaAddress(address),
    formatAddress: (address) => address,
    isValidTransactionHash: (hash: string) => isValidSolanaTx(hash),
    formatTransactionHash: (hash: string) => hash
  },
  [ChainId.Polygon]: {
    name: 'Polygon',
    code: 'POLYGON',
    nativeAsset: 'MATIC',
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 5,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress,
    isValidTransactionHash: (hash: string) => isValidHex(hash),
    formatTransactionHash: (hash: string) => toLowerCaseWithout0x(hash)
  },
  [ChainId.Arbitrum]: {
    name: 'Arbitrum',
    code: 'ARBITRUM',
    nativeAsset: 'ARBETH',
    fees: {
      unit: 'gwei'
    },
    safeConfirmations: 5,
    isValidAddress: isValidAddress,
    formatAddress: toChecksumAddress,
    isValidTransactionHash: (hash: string) => isValidHex(hash),
    formatTransactionHash: (hash: string) => toLowerCaseWithout0x(hash)
  },
  [ChainId.Fuse]: {
    name: 'Fuse',
    code: 'FUSE',
    nativeAsset: 'FUSE',
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
  return [
    ChainId.BinanceSmartChain,
    ChainId.Ethereum,
    ChainId.Rootstock,
    ChainId.Polygon,
    ChainId.Arbitrum,
    ChainId.Fuse
  ].includes(chain)
}

export { chains, isEthereumChain }
