const defaultConfig = require('./webpack.config');
const webpack = require('webpack');

/**
 *  Standalone App Production config adds extra configuration/plugins to the default config
 *  for minifying the JS.. and turning off sourcemaps.
 */
module.exports = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        new webpack.DefinePlugin({PRODUCTION: JSON.stringify(true)}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                booleans: true,
                conditionals: true,
                drop_console: true,
                drop_debugger: true,
                join_vars: true,
                screw_ie8: true,
                sequences: true,
                warnings: false
            },
            sourceMap: false
        })
    ],
    output: {
        ...defaultConfig.output,
        publicPath: 'https://s3.amazonaws.com/cdn.endpointquery-prod-0.us-east-1.rapid7.com/',
        filename: 'endpointQuery.min.js'
    }
};
