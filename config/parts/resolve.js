const path = require('path');

const srcPath = path.resolve(__dirname, '../../src');
const staticPath = path.resolve(__dirname, `../../src/${process.env.STATIC_PATH_NAME}`);

module.exports = function createPart(options) {
  return ({
    extensions: ['.tsx', '.ts', 'jsx', '.js', '.scss', '.pug', '.html', '.json'],
    alias: {
      // assets
      'fontawesome': '@fortawesome/fontawesome-free',

      'js-components': path.join(srcPath, 'js/components'),

      // scss
      'style-components': path.join(srcPath, 'scss/components'),
      'variables': path.join(srcPath, 'scss/variables'),
      'mixins': path.join(srcPath, 'scss/mixins'),
      'placeholders': path.join(srcPath, 'scss/placeholders'),

      // static
      '/images': path.join(staticPath, 'images'),
      '/fonts': path.join(staticPath, 'fonts'),
    },
    ...options
  });
};