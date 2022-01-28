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
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                guest: 'guest@http://localhost:3012/js/remoteEntry.js',
            },
            exposes: {
                './host-utils': './src/utils-host.js',
            }
        }),
    ],
    devtool: "inline-cheap-module-source-map"
};