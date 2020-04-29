'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});