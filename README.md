# README

## How to start the application in development mode

First of all you need to duplicate the `.env.dist` file and name it`.env`. The `.env.dist` has already some default values on it like the url where the mock api is running. So, for exmaple, if you have changed the port where the application is running you will need to change it also in the `.env` file.

Once you have the `.env` file you need to execute the mock api with the command `npm run api`. This will create a mock REST API.

Now you can run the application using `npm start` command that will execute your application. Open [http://localhost:3000](http://localhost:3000) to see it in the browser.

## How to run tests

### Unit Tests

Unit tests use Jest as its tests runner and we use the [react-testing-library](https://github.com/testing-library/react-testing-library) to test components independently. Each component has its own tests located in the same directory using the extension `.test.js`.

Tests can be run in two different ways: with watch mode or without it.

To launch the test runner in the interactive watch mode, use the command `npm run test:watch`.

Otherwise, if you don't want to use the watch mode just run the command `npm test`.

### Functional Tests

Functional tests are made with [Cypress](https://www.cypress.io/) and they can be found at `./Cypress/integration`. All the tests have the extension `.spec.js`

There are two different ways of running those tests. In headless mode `npm run cypress:run` or using the Cypress Test Runner `npm run cypress:open`. In both cases it is essential to have the application running on the port 3030 (you can use the command `npm run cypress:start-app`). In case you run the application in a different port then you will need to change the baseUrl value in the `cypress.json` file; otherwise the tests will fail.

If you want to run the application, run all the functional tests once and shut it down, you can use the command `npm run test:e2e`. This command will run all the functional tests in headless mode.

## Available Scripts

In the project directory, you can run:

```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --watchAll=false",
  "test:watch": "react-scripts test",
  "test:e2e": "start-server-and-test cypress:start-app http://localhost:3030 cypress:run",
  "cypress:start-app": "export PORT=3030 && export BROWSER=none && react-scripts start",
  "cypress:open": "cypress open",
  "cypress:run": "cypress run",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "api": "node ./mock-api/server.js",
  "eject": "react-scripts eject"
}
```

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:e2e`

Starts the application, waits for [http://localhost:3030](http://localhost:3030) to be accessible, then runs the `cypress run` command. When the tests end, shuts down the application

### `npm run cypress:open`

Opens the Cypress Test Runner.

See the section about [open options](https://docs.cypress.io/guides/guides/command-line.html#cypress-open) for more information.

### `npm run cypress:run`

Runs Cypress tests to completion. By default, `cypress run` will run all tests headlessly in the Electron browser.

See the section about [run options](https://docs.cypress.io/guides/guides/command-line.html#cypress-run) for more information.

### `npm run cypress:start-app`

Start the application in port 3030.

### `npm run api`

Runs a fake REST API using `db.json` file.

See the section about [mock server](https://www.npmjs.com/package/json-server#getting-started) for more information.

### `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
