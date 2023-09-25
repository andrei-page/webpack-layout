/*
 * webpack-pwa-manifest
 *
 * webpack-pwa-manifest is a webpack plugin that generates a 'manifest.json' for your Progressive Web Application,
 * with auto icon resizing and fingerprinting support.
 *
 * @see https://github.com/arthurbergmz/webpack-pwa-manifest
 */

const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const defaultOptions = {
  name: 'PugLayout',
  short_name: 'PugLayout',
  start_url: '/',
  display: 'standalone',
  theme_color: '#A86454',
  background_color: '#A86454',
  description: 'Webpack 5 template with Pug, Sass, jQuery and Typescript.',
};

module.exports = function createPlugin(options) {
  return new WebpackPwaManifest({ ...defaultOptions, ...options });
};