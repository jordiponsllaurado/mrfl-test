/* eslint-disable no-console */
const jsonServer = require('json-server');
const chalk = require('chalk');

const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/db.json`);
const middlewares = jsonServer.defaults();

const PORT = 3010;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(chalk.yellow(`JSON Server is running on port ${PORT}`));
});
