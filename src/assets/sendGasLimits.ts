import { ChainId } from '../types'
import { nonERC20SupportChain } from '../chains'

const sendGasLimits = {
  BTC: 290,
  NATIVE_EVM: 21000, // EVM -> ETH, RBTC, MATIC, BNB, AVAX, FUSE
  ERC20_EVM: 90000, // EVM -> ETH, RBTC, MATIC, BNB, AVAX, FUSE
  TERRA: 100000, // applies on both native and ERC2 Terra assets
  ARBETH: 620000, // for native asset is around ~420k and for ERC20 ~540k
  NEAR: 10000000000000,
  SOL: 1000000
}

const getSendGasLimitERC20 = (chainId: ChainId): number | null => {
  if (nonERC20SupportChain(chainId)) {
    return null
  }

  switch (chainId) {
    case ChainId.Arbitrum:
      return sendGasLimits.ARBETH
    case ChainId.Terra:
      return sendGasLimits.TERRA
    default:
      // EVM standard gas limit
      return sendGasLimits.ERC20_EVM
  }
}

export { sendGasLimits, getSendGasLimitERC20 }
