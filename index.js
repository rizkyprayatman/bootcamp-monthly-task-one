const express = require('express');
const route = require('./src/routes/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = 5050;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/api', route(express));
