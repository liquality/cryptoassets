import { mapValues } from 'lodash'
import BigNumber from 'bignumber.js'

function withCurrencyConverters (asset) {
  const multiplier = BigNumber(10).pow(asset.decimals)
  asset.unitToCurrency = value => BigNumber(value).dividedBy(multiplier)
  asset.currencyToUnit = value => BigNumber(value).times(multiplier)
  return asset
}

export const mapCurrencyConverters = (assets) => mapValues(assets, withCurrencyConverters)
