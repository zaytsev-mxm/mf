const webpack = require('webpack');
const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: './app.js',
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'guest',
            filename: 'remoteEntry.js',
            remotes: {
                host: 'host@http://localhost:3011/js/remoteEntry.js',
            },
            exposes: {
                './utils': './src/utils/utils.js',
            },
        }),
    ],
    devtool: "inline-cheap-module-source-map"
};