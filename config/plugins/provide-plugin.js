/*
 * provide-plugin
 *
 * Automatically load modules instead of having to import or require them everywhere.
 *
 * @see https://webpack.js.org/plugins/provide-plugin
 */

const { ProvidePlugin } = require('webpack');

const defaultOptions = { };

module.exports = function createPlugin(options) {
  return new ProvidePlugin({ ...defaultOptions, ...options });
};