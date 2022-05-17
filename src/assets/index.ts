import { nativeAssets, testnetNativeAssets } from './native'
import { erc20Assets, testnetErc20Assets, chainToTokenAddressMap, chainToTestnetTokenAddressMap } from './erc20'
import { getSendGasLimitERC20 } from './sendGasLimits'

const assets = {
  ...nativeAssets,
  ...erc20Assets
}

const testnetAssets = {
  ...testnetNativeAssets,
  ...testnetErc20Assets
}

export { assets, testnetAssets, chainToTokenAddressMap, chainToTestnetTokenAddressMap, getSendGasLimitERC20 }
