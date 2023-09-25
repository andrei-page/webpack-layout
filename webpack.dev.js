const { merge } = require('webpack-merge');
const path = require('path');
const helpers = require('./config/helpers');
const CommonConfig = require('./webpack.common');
const devServerConfig = require('./config/dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pugViews = helpers.assemblyPugFiles('./src/pug/views');
const staticPath = path.resolve(__dirname, `src/${process.env.STATIC_PATH_NAME}`);
const imagesPath = path.join(staticPath, 'images');
const fontsPath = path.join(staticPath, 'fonts');

const addForkTsCheckerNotifierWebpackPlugin = require('./config/plugins/fork-ts-checker-notifier-webpack-plugin');
const addForkTsCheckerWebpackPlugin = require('./config/plugins/fork-ts-checker-webpack-plugin');
const addFriendlyErrorsWebpackPlugin = require('./config/plugins/friendly-errors-webpack-plugin');

const htmlEntries = helpers.getEntriesOfPlugin(pugViews);
const imagesEntries = helpers.assemblyFiles(imagesPath, helpers.regexp.img);
const fontsEntries = helpers.assemblyFiles(fontsPath, helpers.regexp.fonts);


module.exports = merge(CommonConfig, {
  entry: {
    'app': [
      ...htmlEntries,
      ...imagesEntries,
      ...fontsEntries
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: devServerConfig,
  plugins: [
    new addForkTsCheckerWebpackPlugin({
      eslint: {
        files: ''
       // files: './src/!**!/!*.{ts,tsx,js,jsx}'
      }
    }),
    new MiniCssExtractPlugin({}),
    new addForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: false
    }),
    addFriendlyErrorsWebpackPlugin()
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: 'single'
  },
});