import BigNumber from 'bignumber.js'
import {
  assets,
  testnetAssets,
  chainToTokenAddressMap,
  chainToTestnetTokenAddressMap,
  getSendGasLimitERC20
} from './assets'
import { chains, isEthereumChain, isMultiLayeredChain, hasTokens, hasFixedFee } from './chains'
import { dappChains } from './dapps'
import { Asset, AssetType, AssetTypes, ChainId } from './types'

function unitToCurrency(asset: Asset, value: number | BigNumber): BigNumber {
  const multiplier = new BigNumber(10).pow(asset.decimals)
  return new BigNumber(value).dividedBy(multiplier)
}

function currencyToUnit(asset: Asset, value: number | BigNumber): BigNumber {
  const multiplier = new BigNumber(10).pow(asset.decimals)
  return new BigNumber(value).times(multiplier)
}

export {
  assets,
  chainToTokenAddressMap,
  testnetAssets,
  chainToTestnetTokenAddressMap,
  getSendGasLimitERC20,
  chains,
  dappChains,
  isEthereumChain,
  isMultiLayeredChain,
  hasTokens,
  hasFixedFee,
  unitToCurrency,
  currencyToUnit,
  Asset,
  AssetType,
  AssetTypes,
  ChainId
}
