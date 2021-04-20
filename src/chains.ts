import { Chain, ChainId } from './types'
import { isValidAddress, toChecksumAddress } from 'ethereumjs-util'
import validateBitcoinAddress from 'bitcoin-address-validation'

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
    formatAddress: (address) => address
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
    formatAddress: toChecksumAddress
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
    formatAddress: toChecksumAddress
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
    formatAddress: toChecksumAddress
  },
  [ChainId.Near]: {
    name: 'Near',
    code: 'NEAR',
    nativeAsset: 'NEAR',
    fees: {
      unit: 'TGas'
    },
    safeConfirmations: 10,
    isValidAddress: (address) => address.endsWith('.near') || /^[0-9a-fA-F]{64}$/.test(address),
    formatAddress: (address) => address
  }
}

export { chains }
