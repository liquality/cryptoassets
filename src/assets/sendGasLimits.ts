const sendGasLimits = {
  BTC: 290,
  NATIVE_EVM: 21000, // EVM -> ETH, RBTC, MATIC, BNB, AVAX, FUSE
  ERC20_EVM: 90000, // EVM -> ETH, RBTC, MATIC, BNB, AVAX, FUSE
  TERRA: 100000, // applies on both native and ERC2 Terra assets
  ARBETH: 620000,
  NEAR: 10000000000000,
  SOL: 1000000
}

export { sendGasLimits }
