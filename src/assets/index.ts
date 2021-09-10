import { nativeAssets, testnetNativeAssets } from './native'
import { erc20Assets, testnetErc20Assets, chainToTokenAddressMap, chainToTestnetTokenAddressMap } from './erc20'

const assets = {
  ...nativeAssets,
  ...erc20Assets
}

const testnetAssets = {
  ...testnetNativeAssets,
  ...testnetErc20Assets
}

export { assets, testnetAssets, chainToTokenAddressMap, chainToTestnetTokenAddressMap }
