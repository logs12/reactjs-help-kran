'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: [
        "./app/app.js"
    ],
    output: {
        filename: "./dist/bundle.js",
        //sourceMapFilename: "./dist/bundle.js.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                
                loader: 'babel',
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },

  /*  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //Minification js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],*/

    resolve: {
        root: path.resolve('./app'),
        extenstions: ['', '.js']
    }
}
