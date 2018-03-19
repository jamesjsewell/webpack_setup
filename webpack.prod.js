const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack'); //to access built-in plugins

module.exports = merge(common, {
    target: 'web',
    externals: {
        jquery: 'jQuery',
        lodash: 'lodash'
    },
    plugins: [
        new UglifyJSPlugin()
    ]

    
});