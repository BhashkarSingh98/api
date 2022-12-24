const express = require("express");
const server = require("..//Controllers/data");

const datarouter = express.Router();

datarouter.route("/products").get(server.apicontroller);

module.exports = datarouter;
