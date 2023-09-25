/*
 * html-webpack-plugin
 *
 * This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
 * This is especially useful for webpack bundles that include a hash in the filename which
 * changes every compilation. You can either let the plugin generate an HTML file for you,
 * supply your own template using lodash templates or use your own loader.
 *
 * @see https://github.com/jantimon/html-webpack-plugin
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultOptions = { };

module.exports = function createPlugin(options) {
  return new HtmlWebpackPlugin({ ...defaultOptions, ...options });
};