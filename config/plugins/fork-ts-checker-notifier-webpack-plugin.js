/*
 * fork-ts-checker-notifier-webpack-plugin
 *
 * This is a webpack plugin that uses the node-notifier package to display build status
 * system notifications to the user. It's purpose is to work with the fork-ts-checker-webpack-plugin.
 * This deliberately has a similar API as the excellent webpack-notifier plugin.
 * If you are not using fork-ts-checker-webpack-plugin and you want system notifications
 * then you probably want webpack-notifier.
 *
 * @see https://github.com/johnnyreilly/fork-ts-checker-notifier-webpack-plugin
 */

const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

const defaultOptions = { };

module.exports = function createPlugin(options) {
  return new ForkTsCheckerNotifierWebpackPlugin({ ...defaultOptions, ...options });
};
