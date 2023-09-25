/*
 * html-loader
 *
 * Exports HTML as string. HTML is minimized when the compiler demands.
 *
 * @see https://github.com/webpack-contrib/html-loader
 */

module.exports = function htmlLoader(options) {
  return ({
    loader: 'html-loader',
    options
  });
};