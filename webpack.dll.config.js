const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const pck = require('./package')
const VENDOR_LIST = Object.keys(pck.dependencies)

console.log(JSON.stringify(VENDOR_LIST))

const config = {
  entry: VENDOR_LIST,
  output: {
    path: path.resolve(__dirname, 'vendor'),
    filename: '[name].[hash].js',
    library: '[name]_[hash]'
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'vendor', '[name]-manifest.json'),
      context: path.join(__dirname),
      name: '[name]_[hash]'
    })
  ]
}

module.exports = config
