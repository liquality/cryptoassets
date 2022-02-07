import BigNumber from 'bignumber.js'
import { assets, testnetAssets, chainToTokenAddressMap, chainToTestnetTokenAddressMap } from './assets'
import { chains, isEthereumChain } from './chains'
import { dappChains } from './dapps'
import { Asset, ChainId } from './types'

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
  chains,
  dappChains,
  isEthereumChain,
  unitToCurrency,
  currencyToUnit,
  Asset,
  ChainId
}
