const express = require("express");
const server = require("..//Controllers/data");
const server1 = require("../Controllers/data1")
const server2 = require("../Controllers/women")
const server3 = require("../Controllers/kids")
const server4 = require("../Controllers/alldata")

const datarouter = express.Router();
const datarouter1 = express.Router();
const datarouter2 = express.Router();
const datarouter3 = express.Router();
const datarouter4 = express.Router();

datarouter.route("/products1").get(server.apicontroller);
datarouter1.route("/men").get(server1.apicontroller1);
datarouter1.route("/women").get(server2.apicontroller2);
datarouter1.route("/kids").get(server3.apicontroller3);
datarouter1.route("/products").get(server4.apicontroller4);

module.exports = {datarouter,datarouter1,datarouter2,datarouter3,datarouter4};
