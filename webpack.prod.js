const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
    
    target: 'web',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader', 'sass-loader'
                  ]
                })
            }]
    },
    plugins: [
        new UglifyJSPlugin(),
        new ExtractTextPlugin('style.css')
    ]

    
});