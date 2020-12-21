const fs = require('fs')
const axios = require('axios')

const sleep = async (millis) => new Promise(resolve => setTimeout(resolve, millis))
const dataPath = './src/assets/erc20/ethereum-tokens.json'

;(async () => {
  const manifestResult = await axios.get('https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/manifest.json')
  const manifest = manifestResult.data
  const metadataResult = await axios.get('https://raw.githubusercontent.com/MetaMask/eth-contract-metadata/master/contract-map.json')
  const metadataMap = metadataResult.data

  const tokens = {}

  console.log('Generating erc20 list...')

  for (const [contractAddress, metadata] of Object.entries(metadataMap)) {
    if (!metadata.erc20) continue
    const data = {
      name: metadata.name,
      code: metadata.symbol,
      decimals: metadata.decimals,
      contractAddress
    }
    const assetManifest = manifest.find(asset => asset.symbol === metadata.symbol)
    if (assetManifest) {
      data.color = assetManifest.color
    }
    try {
      const coinGeckoResult = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`)
      if (!coinGeckoResult.data.id) throw new Error('missing')
      data.coinGeckoId = coinGeckoResult.data.id
    } catch (e) {
      console.warn(`CoinGecko ID for "${data.name}" not found.`)
    }
    await sleep(1000) // Avoid coingecko rate limit

    tokens[metadata.symbol] = data
  }

  fs.writeFileSync(dataPath, JSON.stringify(tokens, null, 2))
  console.log(`Updated tokens file @ ${dataPath}`)
})()
