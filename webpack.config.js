const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const manifestJSON = require('./vendor/dll-manifest.json')
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

/***
 * https://github.com/webpack-contrib/purifycss-webpack
 * @type {string[]}
 */

const pck = require('./package')
const VENDOR_LIST = Object.keys(pck.dependencies)

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    hash: true,
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      html5: true,
      minifyCSS: true,
      removeComments: true,
      removeEmptyAttributes: true,
    },
  }),
  new webpack.NodeEnvironmentPlugin(['NODE_ENV', 'DEBUG']),
]


const config = (env) => {

  const isProd = env.NODE_ENV === 'production'
  const cssDev = ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']
  const cssProd = ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
  })
  const cssConfig = isProd ? cssProd : cssDev

  if (isProd) {
    plugins.push(new cleanWebpackPlugin(['dist'], { root: __dirname }))
    plugins.push(new webpack.DllReferencePlugin({
      context: path.join(__dirname, 'vendor'),
      manifest: manifestJSON,
    }))
  }

  /*if (!isProd) {
    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity,
      }),
    )
  }*/

  // All others plugins by default
  const extractTextConfig = new ExtractTextWebpackPlugin({
    filename: 'css/[name].[contenthash].css',
    disable: !isProd,
    allChunks: true,
  })
  plugins.push(extractTextConfig)

  return {
    entry: {
      vendor: VENDOR_LIST,
      bundle: './src/index.js',
      lib: './src/test-lib.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[chunkhash].js',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: false,
          },
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['syntax-dynamic-import'],
            },
          },
        },
        {
          test: /\.s?css$/,
          use: cssConfig,

        },
        {
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
              },
            },
            'image-webpack-loader',
          ],
          test: /\.(jpe?g|png|gif|svg)$/,
        },
      ],
    },
    plugins,
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      compress: true,
      stats: 'errors-only',
      port: 3001,
      clientLogLevel: 'info',
    },
    watch: true,
    devtool: 'source-map',
  }


}

module.exports = config
