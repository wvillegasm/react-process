const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/***
 * https://github.com/webpack-contrib/purifycss-webpack
 * @type {string[]}
 */

const pck = require('./package')

const VENDOR_LIST = Object.keys(pck.dependencies)

const config = {
  entry: {
    dll: VENDOR_LIST,
  },
  output: {
    path: path.resolve(__dirname, 'vendor'),
    filename: '[name].bundle.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'vendor','[name]-manifest.json'),
      context: __dirname,
      name: '[name]_[hash]',
    }),
   /* new webpack.optimize.CommonsChunkPlugin({
      names: ['dll'],
      minChunks: Infinity,
    }),*/
  ],
}

module.exports = config
