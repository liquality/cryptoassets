import BigNumber from 'bignumber.js'
import {
  assets,
  testnetAssets,
  chainToTokenAddressMap,
  chainToTestnetTokenAddressMap,
  getSendGasLimitERC20
} from './assets'
import { chains, isEthereumChain } from './chains'
import { dappChains } from './dapps'
import { Asset, AssetType, AssetTypes, ChainId } from './types'
import { with0x } from './common'

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
  unitToCurrency,
  currencyToUnit,
  Asset,
  AssetType,
  AssetTypes,
  ChainId,
  with0x
}
