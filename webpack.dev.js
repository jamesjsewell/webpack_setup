const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

module.exports = merge(common, {
    target: 'web',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",            
                ]
            }
        ]
    },
    devServer: {

        hot: true,
        host: 'localhost',
        watchOptions: {
            poll: true
        },
        proxy: {
            "/api": "http://localhost:3000"
        },
        historyApiFallback: true,
        port: 8080
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        publicPath: "/"
    }
})