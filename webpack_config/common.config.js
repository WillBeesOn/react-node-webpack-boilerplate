const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    client: {
        name: 'client',
        target: 'web',
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, '../dist'),
            publicPath: '/',
            filename: '[name]-[hash].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {minimize: true}
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './client/index.html',
                filename: './index.html',
                excludeChunks: ['server']
            })
        ]
    },
    server: {
        name: 'server',
        target: 'node',
        output: {
            path: path.join(__dirname, '../dist'),
            publicPath: '/'
        },
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
};
