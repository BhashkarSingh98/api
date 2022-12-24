const express = require("express");
const server = require("..//Controllers/data");
const server1 = require("../Controllers/data1")

const datarouter = express.Router();
const datarouter1 = express.Router();

datarouter.route("/products").get(server.apicontroller);
datarouter1.route("/men").get(server1.apicontroller1);

module.exports = {datarouter,datarouter1};
