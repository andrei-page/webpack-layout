/*
 * friendly-errors-webpack-plugin
 *
 * Friendly-errors-webpack-plugin recognizes certain classes of webpack errors and cleans,
 * aggregates and prioritizes them to provide a better Developer Experience.
 *
 * @see https://github.com/geowarin/friendly-errors-webpack-plugin
 */

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const defaultOptions = { };

module.exports = function createPlugin(options) {
  return new FriendlyErrorsWebpackPlugin({ ...defaultOptions, ...options });
};