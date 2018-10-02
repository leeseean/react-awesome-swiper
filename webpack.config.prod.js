const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
    entry: {
        'ReactSwiper': './index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'ReactSwiper',
        libraryTarget: 'amd'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
        }],
    },
    mode: 'production',
    externals: ['react', 'swiper'],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
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