const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('services.json');
const middlewares = jsonServer.defaults();
const mysql= require (`mysql`);

require('dotenv').config();
 
let port  =  process.env.PORT || 3001;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Mock Services runnig  port ${port}`);
})