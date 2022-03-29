import { mapValues, transform } from 'lodash'

import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'
import polygonTokens from './polygon-tokens.json'
import avalancheTokens from './avalanche-tokens.json'
import terraTokens from './terra-tokens.json'

import { TESTNET_CONTRACT_ADDRESSES, TESTNET_TOKENS } from '../testnet'
import { Asset, ChainId, AssetType, AssetMap } from '../../types'
import { sendFees } from '../sendFees'

const rskTokensData = mapValues(rskTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Rootstock,
  sendFee: sendFees.ERC20_EVM
}))

const ethereumTokensData = mapValues(ethereumTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Ethereum,
  sendFee: sendFees.ERC20_EVM
}))

const polygonTokensData = mapValues(polygonTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Polygon,
  sendFee: sendFees.ERC20_EVM
}))

const avalancheTokensData = mapValues(avalancheTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Avalanche,
  sendFee: sendFees.ERC20_EVM
}))

const terraTokensData = mapValues(terraTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Terra,
  sendFee: sendFees.TERRA
}))

const erc20Assets: AssetMap = mapValues(
  { ...rskTokensData, ...ethereumTokensData, ...polygonTokensData, ...terraTokensData, ...avalancheTokensData },
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
