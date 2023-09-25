/*
 * ts-loader
 *
 * This is the TypeScript loader for webpack.
 *
 * @see https://github.com/TypeStrong/ts-loader
 */

module.exports = function tsLoader(options) {
  return ({
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
      ...options
    }
  });
};