const express = require('express');
const app = express();
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

//serves anything in public directory
app.use(express.static('public'));

//parse json
app.use(express.json());

let users = {};
let projects = {};

// //router for service endpoints
// var apiRouter = express.Router();
// app.use(`/api`, apiRouter);

app.get('*', (_req, res) => {
  res.send({ msg: 'Jin service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});