*PRs welcome.  Feel free to contribute!*

# NEPAjs

(about us)

Find us on Twitter: [#nepajs](https://twitter.com/hashtag/NEPAjs?src=hash)

## Code of Conduct

TBD

## Run Locally

### Required

- [Node.js](https://nodejs.org/en/download) (recommended v6.0 and above)
- [yarn](https://yarnpkg.com/en/docs/install) (but can be run with [npm](https://www.npmjs.com), which comes installed with `Node.js`; recommended `npm v3.0` and above)
- A terminal interface (such as [git bash](https://git-scm.com/downloads) for Windows users)

### Installation

- Clone the repository
- `cd` into the project using the terminal
- Type `yarn install` or `npm install` to install the project dependencies
- Type `yarn start` or `npm start` to run the client in development mode
  - Runs on [http://localhost:3000](http://localhost:3000)
- Type `yarn test` or `npm test` to launch the test runner (Jest)

## Architecture

### Technologies

- View: [ReactJS](https://facebook.github.io/react/)
- Package: [yarn](https://yarnpkg.com/en/)
- Transpiler: [Babel](https://babeljs.io/)
- Bundler: [Webpack](https://webpack.github.io/)
- Test: [Jest](https://facebook.github.io/jest/)+[Enzyme](http://airbnb.io/enzyme/)

Configuration has been bootstrapped with `create-react-app`.  Additional documentation regarding this configuration can be found [here](https://github.com/facebookincubator/create-react-app).

### Directories

* Top-level
  * Additional files or folders added to the top-level will be ignored by the production build
* /public/
  * `/public/index.html` is the page template
  * Only files inside `/public/` can be used from `/public/index.html`
  * Additional files or folders added to `/public/` will be ignored by `webpack`
* /src/
  * All new components should be placed within `/src/` or within sub-directories here
  * `/src/index.js` is the JavaScript entry point

  ### Scripts

  - `yarn start` will run the client in development mode
  - `yarn test` will run the test watcher
  - 'yarn test -- --coverage' will run the coverage report
  - 'yarn build' will build the app for production

## Acknowledgements

TBD

## License

TBD
