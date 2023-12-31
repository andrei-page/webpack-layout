/*
 * postcss-loader
 *
 * PostCSS is a tool for transforming styles with JS plugins.
 * These plugins can lint your CSS, support variables and mixins,
 * transpile future CSS syntax, inline images, and more.
 *
 * @see https://github.com/postcss/postcss
 */

module.exports = function postcssLoader(options) {
  return ({
    loader: 'postcss-loader',
    options
  });
};