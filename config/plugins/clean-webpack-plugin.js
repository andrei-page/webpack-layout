/*
 * clean-webpack-plugin
 *
 * A webpack plugin to remove/clean your build folder(s).
 * By default, this plugin will remove all files inside webpack's output.path directory,
 * as well as all unused webpack assets after every successful rebuild.
 *
 * @see https://github.com/johnagan/clean-webpack-plugin
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildPath = path.resolve(__dirname, `../../${process.env.BUILD_PATH_NAME}`);

const defaultOptions = {
  cleanOnceBeforeBuildPatterns: [buildPath]
};

module.exports = function createPlugin(options) {
  return new CleanWebpackPlugin({
    ...defaultOptions,
    ...options
  });
};