const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: './app.js',
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                guest: 'guest@http://localhost:3012/js/remoteEntry.js',
            },
            exposes: {
                './utils': './src/utils.js',
            }
        }),
    ],
    devtool: "inline-cheap-module-source-map"
};