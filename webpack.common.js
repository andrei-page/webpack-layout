require('dotenv-defaults').config();

const helpers = require('./config/helpers');

const configureEntries = require('./config/parts/entry');
const configureOutput = require('./config/parts/output');
const configureResolve = require('./config/parts/resolve');

const tsLoader = require('./config/loaders/ts-loader');
const htmlLoader = require('./config/loaders/html-loader');
const pugHtmlLoader = require('./config/loaders/pug-html-loader');
const styleLoader = require('./config/loaders/style-loader');
const miniCssExtractLoader = require('./config/loaders/mini-css-extract-loader');
const cssLoader = require('./config/loaders/css-loader');
const postcssLoader = require('./config/loaders/postcss-loader');
const resolveUrlLoader = require('./config/loaders/resolve-url-loader');
const sassLoader = require('./config/loaders/sass-loader');

const addESLintPlugin = require('./config/plugins/eslint-webpack-plugin');
const addDefainePlugin = require('./config/plugins/define-plugin');
const addProvidePlugin = require('./config/plugins/provide-plugin');
const createWebpackPwaManifest = require('./config/plugins/webpack-pwa-manifest');
const createWebpackBundleAnalyzer = require('./config/plugins/webpack-bundle-analyzer');

const ifDevelopment = helpers.devUtil(process.env.NODE_ENV);
const withAnalyzer = JSON.parse(process.env.ANALYZER || 'false');

const CommonConfig = {
  entry: configureEntries(),
  output: configureOutput(),
  resolve: configureResolve(),
  module: {
    rules: [
      // JS
      {
        test: helpers.regexp.js,
        exclude: /node_modules/,
        use: [
          tsLoader()
        ]
      },
      // HTML
      {
        test: helpers.regexp.pug,
        use: [
          htmlLoader(),
          pugHtmlLoader()
        ]
      },
      // Styles
      {
        test: helpers.regexp.scss,
        use: [
          ifDevelopment(styleLoader(), miniCssExtractLoader()),
          cssLoader(),
          postcssLoader(),
          resolveUrlLoader(),
          sassLoader()
        ]
      },
      // Assets
      helpers.collectAssetsFor('images'),
      helpers.collectAssetsFor('fonts')
    ]
  },
  plugins: [
    addESLintPlugin(),
    addDefainePlugin(),
    addProvidePlugin(),
    createWebpackPwaManifest(),
    ...helpers.createHtmlFiles('./src/pug/views'),
  ]
};

if (withAnalyzer) {
  CommonConfig.plugins.push(createWebpackBundleAnalyzer());
}

module.exports = CommonConfig;