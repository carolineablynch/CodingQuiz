const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const PORT = process.env.PORT || 8080;
const app = express();
