const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const pck = require('./package')
const VENDOR_LIST = Object.keys(pck.dependencies)

console.log(JSON.stringify(VENDOR_LIST))

const config = {
  entry: {
    dll: VENDOR_LIST,
  },
  output: {
    path: path.resolve(__dirname, 'vendor'),
    filename: '[name].[hash].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new cleanWebpackPlugin(['vendor'], { root: __dirname }),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'vendor', '[name]-manifest.json'),
      context: path.join(__dirname),
      name: '[name]_[hash]',
    }),
  ],
}

module.exports = config
