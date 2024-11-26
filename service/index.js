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

//router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//default
app.get('*', (_req, res) => {
  res.send({ msg: 'Jin service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[user.email] = user;
  
      res.send({ token: user.token });
    }
  });

//tester
// var test_data = {test:"testdata"};

// apiRouter.get('/test', (_req, res) => {
//     console.log("In Test");
//     res.send(test_data);
// });

