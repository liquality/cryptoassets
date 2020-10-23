
const fs = require('fs')
const axios = require('axios')

const dataPath = './src/assets/erc20/tokens.json'

;(async () => {
  const manifestResult = await axios.get('https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/manifest.json')
  const manifest = manifestResult.data
  const metadataResult = await axios.get('https://raw.githubusercontent.com/MetaMask/eth-contract-metadata/master/contract-map.json')
  const metadataMap = metadataResult.data

  const tokens = {}
  Object.entries(metadataMap)
    .filter(([, data]) => data.erc20)
    .forEach(([contractAddress, metadata]) => {
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
      tokens[metadata.symbol] = data
    })

  fs.writeFileSync(dataPath, JSON.stringify(tokens, null, 2))
  console.log(`Updated tokens file @ ${dataPath}`)
})()
