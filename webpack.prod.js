const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const webpack = require('webpack') //to access built-in plugins
const postcssPresetEnv = require('postcss-preset-env') 
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

module.exports = merge(common, {
    
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: 

                ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                        { loader: 'postcss-loader', options: {
                            ident: 'postcss',
                            plugins: () => [
                              postcssPresetEnv(/* options */)
                            ]
                          } },
                        { loader: 'sass-loader', options: { sourceMap: true}}
                        
                    ]
                }) 
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({sourceMap: true}),
        new ExtractTextPlugin('style.css')
    ],
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    
})