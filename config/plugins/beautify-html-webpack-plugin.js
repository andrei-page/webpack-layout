/*
 * beautify-html-webpack-plugin
 *
 * It is a hook of the html-webpack-plugin plug-in,
 * which realizes HTML formatted output, applicable to Webpack 4.
 *
 * @see https://github.com/wewelove/beautify-html-webpack-plugin
 */

const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');

const defaultOptions = {
  indent_size: 2,
  indent_char:  ' ',
  indent_with_tabs: false,
  editorconfig: false,
  eol: '\n',
  end_with_newline: false,
  indent_level: 0,
  preserve_newlines: true,
  max_preserve_newlines: 2,
  space_in_paren: false,
  space_in_empty_paren: false,
  jslint_happy: false,
  space_after_anon_function: false,
  space_after_named_function: false,
  brace_style: 'collapse',
  unindent_chained_methods: false,
  break_chained_methods: false,
  keep_array_indentation: false,
  unescape_strings: false,
  wrap_line_length: 0,
  e4x: false,
  comma_first: false,
  operator_position: 'before-newline',
  indent_empty_lines: false,
  templating: ['auto']
};

module.exports = function createPlugin(options) {
  return new BeautifyHtmlWebpackPlugin({ ...defaultOptions, ...options });
};