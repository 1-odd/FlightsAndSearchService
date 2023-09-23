const express = require("express");
const bodyParser = require("body-parser");

// const cityRepo = require('./repository/city-repository')

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  // Create a new Express application.
  const app = express();

  // setup middleware(to read,access the body data of the upcoming request)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // starting our server
  app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
    
  });
};

setupAndStartServer();
