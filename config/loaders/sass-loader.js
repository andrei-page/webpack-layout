/*
 * sass-loader
 *
 * Loads a Sass/SCSS file and compiles it to CSS.
 *
 * @see https://github.com/webpack-contrib/sass-loader
 */

module.exports = function sassLoader(options) {
  return ({
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      webpackImporter: true,
      implementation: require('sass'),
      ...options
    },
  });
};