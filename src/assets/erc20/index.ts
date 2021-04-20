import _ from 'lodash'
import { Asset, ChainId, AssetType } from '../../types'
import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'

const rskTokensData = _.mapValues(rskTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Rootstock
}))

const ethereumTokensData = _.mapValues(ethereumTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Ethereum
}))

const tokens: { [index: string]: Asset } = _.mapValues({ ...rskTokensData, ...ethereumTokensData }, (tokenData) => ({
  ...tokenData,
  type: 'erc20' as AssetType
}))

export default tokens
