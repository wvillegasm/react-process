const path = require('path')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const manifestJSON = require('./vendor/dll-manifest.json')
// const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    hash: false,
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      html5: true,
      minifyCSS: true,
      removeComments: true,
      removeEmptyAttributes: true,
    },
  }),
  new AddAssetHtmlPlugin({
    filepath: path.join(__dirname, 'vendor', 'dll.*.js'),
    hash: false,
    includeSourcemap: false,
    outputPath: './js',
    publicPath: 'js',
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash].css',
  }),
  new webpack.NodeEnvironmentPlugin(['NODE_ENV', 'DEBUG']),
]

const config = (env) => {
  const isProd = env.NODE_ENV === 'production'
  const mode = isProd ? 'production' : 'development'
  const cssDev = [
    'style-loader?sourceMap',
    'css-loader?sourceMap',
    'sass-loader?sourceMap']
  const cssProd = [
    MiniCssExtractPlugin.loader,
    'css-loader,sass-loader',
  ]
  const cssConfig = isProd ? cssProd : cssDev
  const devtool = !isProd ? 'source-map' : false

  if (isProd) {
    plugins.push(new CleanWebpackPlugin(['dist'], { root: __dirname }))
    plugins.push(new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: manifestJSON,
    }))
  }

  if (!isProd) {
    plugins.push(new webpack.NamedModulesPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  // All others plugins by default
  /*
  plugins.push(new ExtractTextWebpackPlugin({
    filename: 'css/[name].[contenthash].css',
    disable: !isProd,
    allChunks: true,
  }))
  */


  return {
    entry: {
      bundle: ['babel-polyfill', './src/index.js'],
      lib: './src/test-lib.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].js',
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
      hot: true,
    },
    watch: false,
    devtool,
    mode,
  }
}

module.exports = config
