/*
 * define-plugin
 *
 * The DefinePlugin allows you to create global constants which can be configured at compile time.
 * This can be useful for allowing different behavior between development builds and production builds.
 *
 * @see https://webpack.js.org/plugins/define-plugin/
 */

const { DefinePlugin } = require('webpack');
const jsGlobalScope = require('../global-scope-scripts');

const defaultOptions = {
  ...jsGlobalScope
 };

module.exports = function createPlugin(options) {
  return new DefinePlugin({ ...defaultOptions,  ...options });
};