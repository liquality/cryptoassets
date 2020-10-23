const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = (config = { target: 'web' }) => {
  const plugins = []

  if (process.env.NODE_ENV === 'production') {
    if (config.target === 'web') {
      plugins.push(new LodashModuleReplacementPlugin())
    }

    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    )
  }

  return plugins
}
