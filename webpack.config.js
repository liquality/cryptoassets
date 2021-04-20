const path = require('path')
const cwd = process.cwd()
const pkg = require(path.join(cwd, 'package.json'))

const isProdEnv = process.env.NODE_ENV === 'production'
const isWatchEnv = process.env.WEBPACK_WATCH === 'true'

const plugins = []

module.exports = {
  devtool: isProdEnv ? 'source-map' : 'eval',
  entry: './src/index.ts',
  mode: isProdEnv ? 'production' : 'development',
  watch: isWatchEnv,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: path.basename(pkg.main),
    path: path.resolve(cwd, 'dist'),
    libraryTarget: 'commonjs2'
  },
  plugins,
  optimization: {
    usedExports: true // TODO: how to enable tree shaking on commonjs internal and modules? tsconfig should be esnext?
  }
}
