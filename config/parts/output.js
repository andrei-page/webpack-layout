const path = require('path');

const buildPath = path.resolve(__dirname, `../../${process.env.BUILD_PATH_NAME}`);

module.exports = function createPart(options) {
  return ({
    publicPath: '/',
    path: buildPath,
    filename: '[name].js',
    ...options
  });
};
