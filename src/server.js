const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();
mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-mebj4.mongodb.net/omnistack?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
