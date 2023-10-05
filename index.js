//import json server

const jsonserver = require("json-server");

//server creation

const server = jsonserver.create();

//create router

const router = jsonserver.router("db.json");

//parse or convert json to js we use a middleware
//default( ) method used to parse json to js

const middleware = jsonserver.defaults();

//define port

const PORT = process.env.PORT || 4200;

server.use(middleware);
server.use(router);
//listen

server.listen(PORT, () => {
  console.log(`server run at port number ${PORT}`);
});
