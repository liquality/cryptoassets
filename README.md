# Cryptoassets js

[![Build Status](https://travis-ci.com/liquality/cryptoassets.svg?branch=master)](https://travis-ci.com/liquality/cryptoassets)
[![Standard Code Style](https://img.shields.io/badge/codestyle-standard-brightgreen.svg)](https://github.com/standard/standard)
[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](./LICENSE.md)
[![Cryptoassets](https://img.shields.io/npm/dt/@liquality/cryptoassets.svg)](https://npmjs.com/package/@liquality/cryptoassets)

> :warning: This project is under heavy development. Expect bugs & breaking changes.

Crypto assets data and utilities through a standard inteface

## Installation

```bash
npm install @liquality/cryptoassets --save
```

## Usage

```
> const cryptoassets = require('@liquality/cryptoassets')
> cryptoassets.BTC.code
BTC
> cryptoassets.ETH.isValidAddress('0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c)
true
> cryptoassets.BTC.currencyToUnit(1)
100000000
> cryptoassets.ETH.decimals
18
> cryptoassets.BTC.fees.unit
sat/b

```

## License

[MIT](./LICENSE.md)
