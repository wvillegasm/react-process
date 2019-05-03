const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
// const manifestJSON = require('./vendor/dll-manifest.json')

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
      removeEmptyAttributes: true
    }
  }),
  /* new AddAssetHtmlPlugin({
     filepath: path.join(__dirname, 'vendor', 'dll.*.js'),
     hash: false,
     includeSourcemap: false,
     outputPath: './js',
     publicPath: 'js'
   }),*/

  new webpack.NodeEnvironmentPlugin(['NODE_ENV', 'DEBUG'])
]

const config = (env) => {
  const isProd = env.NODE_ENV === 'production'
  const mode = isProd ? 'production' : 'development'
  const cssDev = [
    'style-loader?sourceMap',
    'css-loader?sourceMap'
    // 'sass-loader?sourceMap'
  ]
  const cssProd = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '/css',
        hmr: !isProd
      }
    },
    'css-loader'
    // 'sass-loader'
  ]

  const cssConfig = isProd ? cssProd : cssDev
  const devtool = !isProd ? 'source-map' : false

  // if (isProd) {
  //   plugins.push(new CleanWebpackPlugin())
  //   plugins.push(new webpack.DllReferencePlugin({
  //     context: path.join(__dirname, 'vendor'),
  //     manifest: manifestJSON
  //   }))
  // }

  if (!isProd) {
    plugins.push(new webpack.NamedModulesPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  const miniCss = new MiniCssExtractPlugin({
    filename: isProd ? '[name].[hash].css' : '[name].css',
    chunkFilename: isProd ? '[id].css' : '[id].[hash].css'
  })
  plugins.push(miniCss)

  return {
    entry: {
      bundle: ['./src/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].js',
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'eslint-loader',
            options: {
              // Emit errors instead of warnings (default = false)
              // error: true,
              // enable snazzy output (default = true)
              snazzy: true,
              // configure alternative checker e.g. 'standardx' (default = 'standard')
              // standard: 'standard',
              // all other config options are passed through to standard e.g.
              parser: 'babel-eslint'
            }
          }
        }, {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        }, {
          test: /\.s?css$/,
          use: cssConfig

        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=/images/covers/[name].[ext]&context=./images'
        }
      ]
    },
    plugins,
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      compress: true,
      stats: 'errors-only',
      port: 3001,
      clientLogLevel: 'info',
      hot: true
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        video: path.resolve(__dirname, 'src/'),
        images: path.resolve(__dirname, 'src/images')
      }
    },
    watch: false,
    devtool,
    mode
  }
}

module.exports = config
