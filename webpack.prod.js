const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.common');

const createCleanWebpackPlugin = require('./config/plugins/clean-webpack-plugin');
const createCopyWebpackPlugin = require('./config/plugins/copy-webpack-plugin');
const addMiniCssExtractPlugin = require('./config/plugins/mini-css-extract-plugin');
const addForkTsCheckerWebpackPlugin = require('./config/plugins/fork-ts-checker-webpack-plugin');

module.exports = merge(CommonConfig, {
  mode: 'production',
  optimization: {
    usedExports: false,
    sideEffects:  true
  },
  plugins: [
    addMiniCssExtractPlugin(),
    createCleanWebpackPlugin(),
    createCopyWebpackPlugin(),
    addForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        memoryLimit: 4096
      }
    }),
  ]
});