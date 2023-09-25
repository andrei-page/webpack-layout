/*
 * style-loader
 *
 * Inject CSS into the DOM
 *
 * @see https://github.com/webpack-contrib/style-loader
 */

module.exports = function styleLoader(options) {
  return ({
    loader: 'style-loader',
    options
  });
};