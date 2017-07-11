# NEPA.js [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

>PRs welcome. Feel free to contribute!

Website for the NEPA.js Meetup Group, a community of JavaScript enthusiasts serving Northeast Pennsylvania.

Join our next [Meetup Group](https://www.meetup.com/NEPA-js/)!

Find us on [Twitter](https://twitter.com/hashtag/nepajs?src=hash)!

## Code of Conduct

[Read our Code of Conduct](code-of-conduct.md).

## Project Technology

- [React](https://facebook.github.io/react/) for handling UI
- [Prettier](https://github.com/prettier/prettier) for enforcing code style
- [Flow](https://flow.org/) for static typing
- [Jest](https://facebook.github.io/jest/) for testing
- [styled-components](https://www.styled-components.com/) for handling CSS
  - This project also handles [CSS imports](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)

Configuration has been bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Install and Contribute

### Required

- [Node.js](https://nodejs.org/en/download) (recommended v6.0 and above)
- [yarn](https://yarnpkg.com/en/docs/install)
- A terminal interface (such as [git bash](https://git-scm.com/downloads) for Windows users)

### Run locally

- [Clone the repository](https://help.github.com/articles/cloning-a-repository/)
-- `git clone git@github.com:nepajs/website.git nepajs-website`
- Navigate into the new folder
-- `cd nepajs-website`
- Install the project's dependencies
-- `yarn`
- Run the client in dev mode
-- `yarn start`
- The browser will navigate to [http://localhost:3000](http://localhost:3000).

### No need to think about code style

Prettier [will automatically convert your code](https://github.com/prettier/prettier#what-does-prettier-do) to fit the project's [style guide](https://github.com/airbnb/javascript).

This occurs on every `git commit`.

For the best experience, [integrate Prettier into your editor of choice](https://github.com/prettier/prettier#editor-integration).

### API keys

Certain components may require special passwords to function.  

Required APIs:

- [Meetup.com](https://www.meetup.com/meetup_api/)

These keys should NOT be saved into Github.  To help prevent this, a template file has been created for you.

- Create an account at the link(s) above, and generate your personal API key(s)
- Navigate to the file `/src/util/` folder and look for `/SECRET.example.js`
- Make a copy of this file and name it to `/SECRET.js`
- Replace the example keys with your actual API keys
- Save your API keys to this new `/SECRET.js` file
- DO **NOT** save your API keys to the original `/SECRET.example.js` file

.gitignore will prevent `/SECRET.js` from publishing these keys to Github.

### Add new tests

Documentation for [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) testing.

- All test files are kept in folders named `__tests__`
- Naming convention: `<Name of original file>.test.js`
- Run the test suite
-- `yarn test`
- Update the UI snapshots
-- `yarn test:update`
  - The `__snapshots__` folders don't need to be adjusted manually
- Run a coverage report
-- `yarn test:coverage`

Make sure there are no failing tests prior to sending us a [Pull Request](https://help.github.com/articles/creating-a-pull-request/)!

### Send us your changes

- [Save your changes through git](https://www.atlassian.com/git/tutorials/saving-changes)
  - [Advice for writing a good commit message](https://chris.beams.io/posts/git-commit/)
- [Create a Pull Request](https://yangsu.github.io/pull-request-tutorial/)

## Additional Information

### Project Hierarchy

The main client-side code can be found in the `src/` directory

- Entry point/render: `src/index.js`
- Routing: `src/App.jsx`
  - Special note: This project utilizes code splitting to load pages asynchronously
  - [Guide to Code Splitting in Create React App](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
- A service worker has been installed as per the [PWA specification](http://blog.ionic.io/what-is-a-progressive-web-app/)
  - This service worker is part of Create React App and shouldn't need to be updated

"Top-level" components can be found in the `src/page` directory.

- Currently, there is no practical difference between `src/page` and `src/component`
- In the future, these top-level components may be rendered server-side

All other components can be found in the `src/component` directory.

- Related files that execute a single function are grouped together into the same sub-directory
  - i.e. All files that to serve to create the *HeroImage* (such as its main React component, its test files, and its .jpg image) will be found in the `src/component/HeroImage/` sub-directory
- The "master" file within these sub-directories are named `index.js[x]`

Special/unique files can be found in the `src/util` directory.

## License

[MIT](LICENSE.txt)