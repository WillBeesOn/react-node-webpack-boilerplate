const merge = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports =
    merge(commonConfig.server, {
        mode: 'development',
        entry: {
            server: `./server/dev-server.js`,
        },
        output: {
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.glb$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/models',
                            name:'[name].[ext]'
                        }
                    }
                }
            ]
        }
    });
