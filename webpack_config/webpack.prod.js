const MiniCssPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports = [
    merge(commonConfig.client, {
        mode: 'production',
        entry: {
            main: ['./src/index.js']
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCssPlugin({})
            ]
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ MiniCssPlugin.loader, 'css-loader' ]
                }
            ]
        },
        plugins: [
            new MiniCssPlugin({
                filename: '[name]-[hash].css',
                chunkFilename: '[id]-[hash].css'
            })
        ]
    }),
    merge(commonConfig.server, {
        mode: 'production',
        entry: {
            server: `./server/server.js`,
        },
        output: {
            filename: '[name]-[hash].js'
        },
        module: {
            rules: []
        }
    })
];
