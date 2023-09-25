/*
 * resolve-url-loader
 *
 * This webpack loader allows you to have a distributed set SCSS files and assets co-located with those SCSS files.
 *
 * @see https://github.com/bholloway/resolve-url-loader/tree/master/packages/resolve-url-loader
 */

module.exports = function resolveUrlLoader(options) {
  return ({
    loader: 'resolve-url-loader',
    options
  });
};