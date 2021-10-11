import { mapValues, transform } from 'lodash'

import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'
import polygonTokens from './polygon-tokens.json'

import { TESTNET_CONTRACT_ADDRESSES, TESTNET_TOKENS } from '../testnet'
import { Asset, ChainId, AssetType, AssetMap } from '../../types'

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

const erc20Assets: AssetMap = mapValues(
  { ...rskTokensData, ...ethereumTokensData, ...polygonTokensData },
  (tokenData) => ({
    ...tokenData,
    type: 'erc20' as AssetType
  })
)

const testnetErc20Assets = TESTNET_TOKENS.reduce((assets: AssetMap, asset: string) => {
  return Object.assign(assets, {
    [asset]: {
      ...erc20Assets[asset],
      contractAddress: TESTNET_CONTRACT_ADDRESSES[asset]
    }
  })
}, {})

const transformAssetMap = (tokens: AssetMap) =>
  transform(tokens, (result: { [chain: string]: AssetMap }, value: Asset) => {
    return value.chain && (result[value.chain] = { ...result[value.chain], [value.contractAddress]: value })
  })

const chainToTokenAddressMap = transformAssetMap(erc20Assets)
const chainToTestnetTokenAddressMap = transformAssetMap(testnetErc20Assets)

export { erc20Assets, testnetErc20Assets, chainToTokenAddressMap, chainToTestnetTokenAddressMap }
