/*
 * mini-css-extract-plugin
 *
 * mini-css-extract-plugin is more often used in production mode to get separate css files.
 * For development mode (including webpack-dev-server) you can use style-loader,
 * because it injects CSS into the DOM using multiple <style></style> and works faster.
 * This plugin should not be used with style-loader in the loaders chain.
 *
 * @see https://www.npmjs.com/package/mini-css-extract-plugin
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function miniCssExtractLoader() {
  return MiniCssExtractPlugin.loader;
};