/*
 * pug-html-loader
 *
 * returns pug file content as html compiled string
 *
 * @see https://github.com/willyelm/pug-html-loader
 */

const path = require('path');
const pugGlobalScope = require('../global-scope-pug');

module.exports = function pugHtmlLoader(options) {
  return ({
    loader: 'pug-html-loader',
    options: {
      basedir: path.resolve(__dirname, '../../src/pug'),
      data: pugGlobalScope,
      ...options
    }
  });
};