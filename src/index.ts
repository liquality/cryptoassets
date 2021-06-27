import BigNumber from 'bignumber.js'
import { assets, nativeCodeSynonyms } from './assets'
import { chains, isEthereumChain } from './chains'
import { Asset } from './types'

function unitToCurrency(asset: Asset, value: number | BigNumber): BigNumber {
  const multiplier = new BigNumber(10).pow(asset.decimals)
  return new BigNumber(value).dividedBy(multiplier)
}

function currencyToUnit(asset: Asset, value: number | BigNumber): BigNumber {
  const multiplier = new BigNumber(10).pow(asset.decimals)
  return new BigNumber(value).times(multiplier)
}

export { assets, nativeCodeSynonyms, chains, isEthereumChain, unitToCurrency, currencyToUnit }
