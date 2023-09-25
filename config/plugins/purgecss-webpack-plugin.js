/*
 * purgecss-webpack-plugin
 *
 * A plugin to remove unused css with purgecss.
 *
 * @see https://github.com/FullHuman/purgecss/tree/master/packages/purgecss-webpack-plugin
 */

const path = require('path');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = { src: path.join(__dirname, '../../src') };
const defaultOptions = {
  paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
};

module.exports = function createPlugin(options) {
  return new PurgecssPlugin({ ...defaultOptions, ...options });
};