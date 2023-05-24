const express = require('express');
const server = express();
const cors = require('cors');
const router = require("../rutas/index")
const morgan = require("morgan")

server.use(express.json())
server.use(morgan("dev"))
server.use(cors());
        
server.use("/rickandmorty", router);


module.exports = server;
