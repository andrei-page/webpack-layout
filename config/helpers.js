const R = require('ramda');
const fs = require('fs');
const createHtmlWebpackPlugin = require('./plugins/html-webpack-plugin');
const createBeautifyHtmlWebpackPlugin = require('./plugins/beautify-html-webpack-plugin');

const regexp = {
  js: /.*\.(t|j)sx?$/,
  scss: /.*\.(sa|sc|c)ss$/,
  pug: /.*\.pug$/,
  img: /.*\.(jpg|jpeg|webp|png|svg|gif)$/i,
  fonts: /.*\.(eot|svg|ttf|otf|woff|woff2)$/i,
  json: /\.json$/,
};

const devUtil = (env) => {
  const isDev = R.equals(env, 'development');

  return (argCondition, argNotCondition) => (isDev ? argCondition : argNotCondition);
};

const getEntriesOfPlugin = (arrayOfPluginInstance) =>
  arrayOfPluginInstance.map((pluginInstance) => {
    return pluginInstance.userOptions.template;
  });

const converPugToHTML = (pugTemplate, path) => {
  const changeExtension = R.replace(/\.pug/, '.html');
  const baseContext = R.replace(/\.\/src\//, 'src/', path);
  const pugContext = R.replace(/\.\/src\/pug\/views/, '', path);
  const template = `./${baseContext}/${pugTemplate}`;
  const filename = `${pugContext ? `.${pugContext}/` : './'}${changeExtension(pugTemplate)}`;

  return createHtmlWebpackPlugin({ filename, template });
};

const assemblyPugFiles = (path) => {
  const assemblify = R.reduce((res, pug) => {
    const file = `${path}/${pug}`;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      return [...res, ...assemblyPugFiles(file, pug)];
    } else {
      return [...res, converPugToHTML(pug, path)];
    }
  }, []);

  return assemblify(fs.readdirSync(path));
};

const assemblyFiles = (path, pattern) => {
  const assemblify = R.reduce((res, i) => {
    const file = `${path}/${i}`;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      return [...res, ...assemblyFiles(file, pattern)];
    } else {
      return [...res, file];
    }
  }, []);
  const matchedPatterns = R.filter((file) => file.match(pattern));

  return matchedPatterns(assemblify(fs.readdirSync(path)));
};

const createHtmlFiles = (path, beautifyOptions = {}) => {
  const pugViews = assemblyPugFiles(path);
  return [...pugViews, createBeautifyHtmlWebpackPlugin(beautifyOptions)];
};

const collectAssetsFor = (assetName) => {
  const staticPath = process.env.STATIC_PATH_NAME;
  switch (assetName) {
    case 'images':
      return {
        test: regexp.img,
        exclude: [/fonts/],
        type: 'asset',
        generator: {
          filename: `${staticPath}/images/[name][ext]`,
        },
      };
    case 'fonts':
      return {
        test: regexp.fonts,
        exclude: [/images/],
        type: 'asset',
        generator: {
          filename: `${staticPath}/fonts/[name][ext]`,
        },
      };
    default:
      break;
  }
};

module.exports = {
  regexp,
  devUtil,
  assemblyFiles,
  assemblyPugFiles,
  getEntriesOfPlugin,
  createHtmlFiles,
  collectAssetsFor,
};
