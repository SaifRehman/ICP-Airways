const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpack = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    node: 
    {
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [new CleanWebpack(['./dist/main.js'])]
};
