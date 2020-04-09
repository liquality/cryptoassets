import _ from 'lodash'
import BigNumber from 'bignumber.js'
import networkAssets from './network'
import erc20Assets from './erc20'

let assets = {
  ...networkAssets,
  ...erc20Assets
}

function withCurrencyConverters (asset) {
  const multiplier = BigNumber(10).pow(asset.decimals)
  asset.unitToCurrency = value => BigNumber(value).dividedBy(multiplier)
  asset.currencyToUnit = value => BigNumber(value).times(multiplier)
  return asset
}

assets = _.mapValues(assets, withCurrencyConverters)

export default assets
