module.exports = {
  // global vars
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  // helpers
  __: {
    thenLoadPage: function(fn) {
      /*
        * @params
        * fn: () => void
        *
        * Run handler then load page.
        */
      document.addEventListener('DOMContentLoaded', (e) => {
        if (typeof fn === 'function') fn(e);
      })
    },
  }
};