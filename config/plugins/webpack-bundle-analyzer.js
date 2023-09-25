/*
 * webpack-bundle-analyzer
 *
 * Visualize size of webpack output files with an interactive zoomable treemap.
 *
 * @see https://github.com/webpack-contrib/webpack-bundle-analyzer
 */

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const defaultOptions = { };

module.exports = function createPlugin(options) {
  return new BundleAnalyzerPlugin({ ...defaultOptions, ...options });
};