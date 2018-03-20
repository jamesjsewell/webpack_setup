const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            {   
                test: /\.txt$/, 
                use: 'raw-loader' 
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
        title: 'webpack_setup'
        })
    ],
    
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};