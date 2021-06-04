import { mapValues } from 'lodash'
import { Asset, ChainId, AssetType } from '../../types'
import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'
import polygonTokens from './polygon-tokens.json'

const rskTokensData = mapValues(rskTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Rootstock
}))

const ethereumTokensData = mapValues(ethereumTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Ethereum
}))

const polygonTokensData = mapValues(polygonTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Polygon
}))

const tokens: { [index: string]: Asset } = mapValues(
  { ...rskTokensData, ...ethereumTokensData, ...polygonTokensData },
  (tokenData) => ({
    ...tokenData,
    type: 'erc20' as AssetType
  })
)

export default tokens
