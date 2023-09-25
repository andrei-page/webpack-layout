/*
 * eslint-webpack-plugin
 *
 * The plugin was born with the purpose of solving some problems of the eslint-loader.
 *
 * @see https://github.com/webpack-contrib/eslint-webpack-plugin
 */

const ESLintPlugin = require('eslint-webpack-plugin');

const defaultOptions = { };

module.exports = function createPlugin(options) {
  return new ESLintPlugin({ ...defaultOptions, ...options });
};
