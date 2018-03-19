const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, 
        use: 'raw-loader' 
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      port: 3000,
      hot: true,
      open: true,
      watchOptions: {
        poll: true
      }
    },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: './index.html'}),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;