const webpack = require('webpack')
const path = require('path')


module.exports = {
  entry:{
    main: './src/index.js'
  },
  mode: "development",
  output:{
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: "dist"
  },
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: "css-loader"
        }
      ]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].html'
          }
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'html-loader'
        }
      ]
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
