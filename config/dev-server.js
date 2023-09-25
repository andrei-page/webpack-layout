const path = require('path');

const staticPath = path.resolve(__dirname, `src/${process.env.STATIC_PATH_NAME}`);

module.exports = {
  port: process.env.DEV_PORT,
  host: process.env.DEV_HOST,
  hot: true,
  compress: true,
  open: false,
  liveReload: true,
  allowedHosts: ['*'],
  static: {
    publicPath: '/',
    directory: staticPath
  },
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
  },
}