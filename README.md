# Cryptoassets js

[![Release](https://github.com/liquality/cryptoassets/actions/workflows/release.yml/badge.svg)](https://github.com/liquality/cryptoassets/actions/workflows/release.yml)
[![Standard Code Style](https://img.shields.io/badge/codestyle-standard-brightgreen.svg)](https://github.com/standard/standard)
[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](./LICENSE.md)
[![Cryptoassets](https://img.shields.io/npm/dt/@liquality/cryptoassets.svg)](https://npmjs.com/package/@liquality/cryptoassets)

Crypto assets data and utilities through a standard inteface

## Installation

```bash
npm install @liquality/cryptoassets --save
```

## Usage

```
> const { assets, chains, currencyToUnit } = require('@liquality/cryptoassets')
> assets.BTC.code
BTC
> assets.ETH.decimals
18
> currencyToUnit(assets.BTC, 1)
100000000
> chains.ethereum.safeConfirmations
3
> chains[assets.btc.chain].fees.unit
sat/b
> chains[assets.eth.chain].isValidAddress('0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c)
true

```

## License

[MIT](./LICENSE.md)
