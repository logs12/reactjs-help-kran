'use strict';

const webpack = require('webpack');


module.exports = {
    // точки входа
    entry: ["./src/app.js"],

    // то, что получим на выходе
    output: {
        path: __dirname + '/build/',
        publicPath: "/",
        filename: "bundle.js"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                /*
                 компоненты reactjs написаны с использованием JSX разметки и классов, которые доступны только в es6,
                 чтобы итоговый js был понят браузерами, нужно привести его в нормальный вид, за это отвечает транспайлер babel,
                 который преобразует jsx разметку в обычный js, а так же код стандарта es6 преобразует в код стандарта es5
                 */
                loader: 'babel',
                test: /\.js$/,
                exclude: [/node_modules/, /bower_components/, /public/, /gulpfile.js/]
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /bower_components/, /public/]
            },
            {
                test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                test   : /\.css$/,
                loaders: ['style', 'css', 'resolve-url']
            },
            {
                test   : /\.scss$/,
                loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
            }
        ]

    },

    /* Конфиг для webpack-dev-server*/
    devServer: {
        host: 'help-kran.loc',
        port: 8080,
        //contentBase: __dirname + '/public',
        contentBase: './',
        devtool: 'eval-source-map',
        historyApiFallback: true
        // все пути к статике которые WDS не нашел(катинки и т.п.) отдаются на

       /* proxy: {
            '*': 'http://help-kran.loc/'
        }*/
    }
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

}
