import { nativeAssets, nativeCodeSynonyms } from './native'
import erc20Assets from './erc20'

const assets = {
  ...nativeAssets,
  ...erc20Assets
}

export { assets, nativeCodeSynonyms }
