/*
 * fork-ts-checker-webpack-plugin
 *
 * Webpack plugin that runs TypeScript type checker on a separate process.
 *
 * @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
 */

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const defaultOptions = { };

module.exports = function createPlugin(options) {
  return new ForkTsCheckerWebpackPlugin({ ...defaultOptions, ...options });
};
