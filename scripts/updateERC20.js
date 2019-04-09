
const fs = require('fs')

/**
 * Download the master branch of ethereum list: https://github.com/ethereum-lists/tokens
 * Extract it into the `tokens-master` directory. Path configured below.
 */

const tokensPath = './tokens-master/tokens/eth/'
const dataPath = './src/assets/erc20/tokens.json'

const tokens = {}

fs.readdir(tokensPath, (err, files) => {
  console.log(`Error: ${err}`)

  files.forEach(file => {
    const tokenData = JSON.parse(fs.readFileSync(`${tokensPath}${file}`, { encoding: 'utf-8' }))

    tokens[tokenData.symbol.toLowerCase()] = {
      name: tokenData.name,
      code: tokenData.symbol,
      decimals: tokenData.decimals
    }
  })

  fs.writeFileSync(dataPath, JSON.stringify(tokens, null, 2))

  console.log(`Updated tokens file @ ${dataPath}`)
})
