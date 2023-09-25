/*
 * css-loader
 *
 * The css-loader interprets @import and url() like import/require() and will resolve them.
 *
 * @see https://github.com/webpack-contrib/css-loader
 */

module.exports = function cssLoader(options) {
  return ({
    loader: 'css-loader',
    options
  });
};