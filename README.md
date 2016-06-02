# Boilerplate for react application + redux + react-router + material ui + istanbul

## Installations & Scripts
* Install and update packages: `npm install` from root folder.
* Run server on local code (/src folder): `npm start -s`
* Run server on production code (/dist folder): `npm run build`
* When installing new npm package add `--save` so it will be added to the package.json file

###package.json

| **Script** | **Description** |
|----------|-------|
| prestart | Runs automatically before start. Calls remove-dist script which deletes the dist folder. This helps remind you to run the build script before committing since the dist folder will be deleted if you don't. ;) |
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| lint:tools | Runs ESLint on build related JS files. (eslint-loader lints src files via webpack when `npm start` is run) |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder. |
| create-dist | Creates the dist folder and the necessary subfolders. |
| build:html | Adds trackJS tracking script and copies to /dist. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs tests (files ending in .spec.js) using Mocha & Istanbul and outputs results to the command line with a summary report. |
| test-watch| Run tests and watches all files so tests are re-run upon save.

###File structure
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── app                   # All the application files, seperated into feature based folders.
│   │   ├── static_pages      # For example, this folder holds all the static pages of the appliction (404 page, About, Home..)
│   ├── store                 # Redux store configuration
│   └── styles                # CSS Styles, typically written in Sass
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── build_html.js         # Builds index.html
│   ├── dist_server.js        # Starts webserver and opens final built app that's in dist in your default browser
│   ├── src_server.js         # Starts dev webserver with hot reloading and opens your app in your default browser
└── webpack.config.js         # Configures webpack
```
