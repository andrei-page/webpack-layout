/*
 * mini-css-extract-plugin
 *
 * This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
 * It supports On-Demand-Loading of CSS and SourceMaps.
 *
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const defaultOptions = {
  filename: '[name].css',
};

module.exports = function createPlugin(options) {
  return new MiniCssExtractPlugin({ ...defaultOptions, ...options });
};