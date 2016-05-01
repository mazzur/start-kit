'use strict';

const
    webpack = require('webpack'),
    plugins = require('./plugins'),
    devServer = require('./devServer');

module.exports = {
    devtool: 'source-map',
    eslint: {
        failOnError: true
    },
    plugins: [].concat(
        new webpack.HotModuleReplacementPlugin(),
        plugins
    ),
    devServer
};
