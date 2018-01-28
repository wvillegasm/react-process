const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIST = []

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIST,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'babel-preset-env',
              'react',
            ],
          },
        },
      },
      {
        test: /\.css?/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),

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
  plugins: [
    new ExtractTextWebpackPlugin('css/[name].css'),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    stats: 'errors-only',
    port: 3001,
    clientLogLevel: 'info',
  },
}

module.exports = config
