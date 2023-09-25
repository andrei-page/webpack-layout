# Pug Layout

Webpack 5 template with Pug, Sass and Typescript.

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Features

- [Webpack](https://webpack.js.org/guides) (v5.5.0)
    - [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) (v3.11.0)
    - [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement)
- [Pug](https://pugjs.org/api/getting-started.html) (v2.0.4)
- [ECMAScript 6/7](http://es6-features.org)
- [Typescript](https://www.typescriptlang.org/docs/) (v4.2.4)
- [FontAwesome Free](https://fontawesome.com/) (v5.15.1)
- [Sass](http://sass-lang.com/guide) (v1.27.0)

## Start Dev Server

1. `git clone https://gitlab.com/SansYurin/pug-layout.git`
2. Run `npm install` or `yarn`
3. Start the dev server using `npm run start` or `yarn start`
3. Open [http://localhost:3000](http://localhost:3000)


## Commands

- `npm run start` or `yarn start` - start the dev server
- `npm run build` or `yarn build` - create build in `build` directory
- `npm run lint` or `yarn lint` - run js linter
- `npm run pretty` or `yarn pretty` - run js prettier
- `ANALYZER=true npm run [command]` or `ANALYZER=true yarn [command]` - run analyzer with `build` or `start` commands