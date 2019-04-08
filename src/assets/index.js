import _ from 'lodash'
import BigNumber from 'bignumber.js'
import networkAssets from './network'
import erc20Assets from './erc20'

const assets = {
  ...networkAssets,
  ...erc20Assets
}

function withCurrencyConverters (asset) {
  const multiplier = BigNumber(10).pow(asset.decimals)
  asset.unitToCurrency = value => BigNumber(value).dividedBy(multiplier).toNumber()
  asset.currencyToUnit = value => BigNumber(value).times(multiplier).toNumber()
  return asset
}

assets = _.mapValues(assets, withCurrencyConverters)

export default assets
