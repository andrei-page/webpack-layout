const R = require('ramda');
const path = require('path');

const mergeObjects = (acc, obj) => R.mergeRight(acc, obj);
const mergeArrays = (acc, array) => R.concat(acc, array);

module.exports = {
  // global vars
  PROJECT_NAME: 'Pug Layout',
  NODE_ENV: process.env.NODE_ENV,
  // helpers
  $: {
    requireFromModuleApp(page, filename) {
      /*
       * @params
       * page: string
       * filename: string
       *
       * Load data from json file.
       */
      const context = 'src/pug/modules/app';
      const dirname = path.resolve(process.cwd(), `${context}/${page}/${filename}`);
      return require(dirname);
    },
    merge(type) {
      /*
       * @params
       * type: string
       *
       * Merge two or more objects or arrays.
       */
      const args = Array.prototype.slice.call(arguments, 1);
      switch (type) {
        case 'objects':
          return R.reduce(mergeObjects, {}, args);
        case 'arrays':
          return R.reduce(mergeArrays, [], args)
        default:
          return null
      }
    }
  }
}