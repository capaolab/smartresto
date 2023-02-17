const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        print: './models/main.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [],
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '../static'),
        clean: true,
    },
};