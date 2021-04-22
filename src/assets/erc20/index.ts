import { mapValues } from 'lodash'
import { Asset, ChainId, AssetType } from '../../types'
import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'

const rskTokensData = mapValues(rskTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Rootstock
}))

const ethereumTokensData = mapValues(ethereumTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Ethereum
}))

const tokens: { [index: string]: Asset } = mapValues({ ...rskTokensData, ...ethereumTokensData }, (tokenData) => ({
  ...tokenData,
  type: 'erc20' as AssetType
}))

export default tokens
