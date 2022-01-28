import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
                './guest-utils': './src/utils-guest.js',
            },
        }),
    ],
    devtool: "inline-cheap-module-source-map"
};