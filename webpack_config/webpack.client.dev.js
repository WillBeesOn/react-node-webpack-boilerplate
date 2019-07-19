const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports =
    merge(commonConfig.client, {
        mode: 'development',
        entry: {
            main: ['./client/index.js', 'webpack-hot-middleware/client?reload=true']
        },
        optimization: {
            noEmitOnErrors: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.svg$/,
                    use: 'file-loader'
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
