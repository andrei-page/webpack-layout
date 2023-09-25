/*
 * copy-webpack-plugin
 *
 * Copies individual files or entire directories, which already exist, to the build directory.
 *
 * @see https://github.com/webpack-contrib/copy-webpack-plugin
 */

const CopyWebpackPlugin = require('copy-webpack-plugin');

const staticPathName = process.env.STATIC_PATH_NAME;

const defaultOptions = {
  patterns: [
    {
      from: `./src/${staticPathName}/images`,
      to: `./${staticPathName}/images`,
      globOptions: {
        ignore: ['**/.gitkeep']
      }
    }
  ]
};

module.exports = function createPlugin(options) {
  return new CopyWebpackPlugin({
    ...defaultOptions,
    ...options
  });
};