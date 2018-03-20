const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack'); //to access built-in plugins

module.exports = merge(common, {
    target: 'web',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, 
                    {
                        loader: "postcss-loader" 
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]
});



