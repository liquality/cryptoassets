import { mapValues, transform } from 'lodash'

import ethereumTokens from './ethereum-tokens.json'
import rskTokens from './rsk-tokens.json'
import polygonTokens from './polygon-tokens.json'
import avalancheTokens from './avalanche-tokens.json'
import terraTokens from './terra-tokens.json'
import arbitrumTokens from './arbitrum-tokens.json'
import optimismTokens from './optimism-tokens.json'

import { TESTNET_CONTRACT_ADDRESSES, TESTNET_TOKENS } from '../testnet'
import { Asset, ChainId, AssetType, AssetMap } from '../../types'
import { sendGasLimits } from '../sendGasLimits'

const rskTokensData = mapValues(rskTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Rootstock,
  sendGasLimit: sendGasLimits.ERC20_EVM
}))

const ethereumTokensData = mapValues(ethereumTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Ethereum,
  sendGasLimit: sendGasLimits.ERC20_EVM
}))

const polygonTokensData = mapValues(polygonTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Polygon,
  sendGasLimit: sendGasLimits.ERC20_EVM
}))

const avalancheTokensData = mapValues(avalancheTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Avalanche,
  sendGasLimit: sendGasLimits.ERC20_EVM
}))

const terraTokensData = mapValues(terraTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Terra,
  sendGasLimit: sendGasLimits.TERRA
}))

const arbitrumTokensData = mapValues(arbitrumTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Arbitrum,
  sendGasLimit: sendGasLimits.ARBETH
}))

const optimismTokensData = mapValues(optimismTokens, (tokenData) => ({
  ...tokenData,
  chain: ChainId.Optimism,
  sendGasLimit: sendGasLimits.ERC20_OPTIMISM_L2,
  sendGasLimitL1: sendGasLimits.ERC20_OPTIMISM_L1
}))

const erc20Assets: AssetMap = mapValues(
  {
    ...rskTokensData,
    ...ethereumTokensData,
    ...polygonTokensData,
    ...terraTokensData,
    ...avalancheTokensData,
    ...arbitrumTokensData,
    ...optimismTokensData
  },
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
