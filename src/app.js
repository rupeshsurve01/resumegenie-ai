const express = require('express');

const app = express();


app.use(express.json());//allows data reading from a request


module.exports = app;