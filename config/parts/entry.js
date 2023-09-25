module.exports = function createPart(options) {
  return {
    app: ['./src/js/modules/app/index.js', './src/scss/_main.scss'],
    ...options,
  };
};
