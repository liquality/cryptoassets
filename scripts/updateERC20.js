
const fs = require('fs')
const request = require('request')

/**
 * Download the master branch of ethereum list: https://github.com/ethereum-lists/tokens
 * Extract it into the `tokens-master` directory. Path configured below.
 */

const tokensPath = './tokens-master/tokens/eth/'
const dataPath = './src/assets/erc20/tokens.json'

const tokens = {}

request('https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/manifest.json', function (error, response, body) {
  if (error) console.log(error)
  const manifest = JSON.parse(body)

  fs.readdir(tokensPath, (err, files) => {
    if (err) console.log(`Error: ${err}`)

    files.forEach(file => {
      const tokenData = JSON.parse(fs.readFileSync(`${tokensPath}${file}`, { encoding: 'utf-8' }))
      const assetManifest = manifest.find(asset => asset.symbol === tokenData.symbol)
      const data = {
        name: tokenData.name,
        code: tokenData.symbol,
        decimals: tokenData.decimals
      }
      if (assetManifest) {
        data.color = assetManifest.color
      }
      tokens[tokenData.symbol.toLowerCase()] = data
    })

    fs.writeFileSync(dataPath, JSON.stringify(tokens, null, 2))

    console.log(`Updated tokens file @ ${dataPath}`)
  })
})
