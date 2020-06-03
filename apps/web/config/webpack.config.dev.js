const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./webpack.config.js');

config.mode = 'development';
config.devtool = 'inline-source-map';

config.plugins.push(
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false,
  })
);

module.exports = config;
