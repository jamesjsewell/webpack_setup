const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack'); //to access built-in plugins
var nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
    target: 'web',
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]
});