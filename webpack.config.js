
var webapck = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry : './src/index.js',
    output : { 
        path : "dist/",
        filename : "app.bundle.js"
    },
    devtool: 'eval-source-map',
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                loader : 'babel',
                query : {
                    presets : [
                        'es2015' , 'react'
                    ]
                }
            },
            {
                test : /\.less$/,
                exclude : /(node_modules)/,
                loader : 'style-loader!css-loader!less-loader'
            },
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?/,
                loader : 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test:/\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimttype=application/octet-stream'
            },
            {
                test:/\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }

        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : './src/index.html'
        }),
        new webapck.ProvidePlugin({
            $ : "jquery",
            jQuery: "jquery"
        })
    ],
    resolve : {
        extensions : ['' , '.js'],
        alias : {
            jquery: "jquery/src/jquery"
        }
    }
}