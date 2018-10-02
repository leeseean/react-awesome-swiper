const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    entry: {
        'ReactSwiper': './index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].development.js',
        library: 'ReactSwiper',
        libraryTarget: 'amd'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
        },],
    },
    externals: {
        react: 'React',
    },
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    //压缩js
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    minimize: false,
                    compress: false,
                }
            })
        ]
    },
};