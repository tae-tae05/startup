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

//tester 2
apiRouter.post('/poke', async(_req, res) => {
    console.log("in poke");
    res.send({msg: "poke page" });
});

// //CreateAuth a new user
// apiRouter.post('/auth/create', async (req, res) => {
//     console.log("In Create");
//     res.send({msg: "create page" });
//     // const user = users[req.body.email];
//     // if (user) {
//     //   res.status(409).send({ msg: 'Existing user' });
//     // } else {
//     //   const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
//     //   users[user.email] = user;
  
//     //   res.send({ token: user.token });
//     // }
//   });

// // GetAuth login an existing user
// apiRouter.post('/auth/login', async (req, res) => {
//     const user = users[req.body.email];
//     if (user) {
//     if (req.body.password === user.password) {
//         user.token = uuid.v4();
//         res.send({ token: user.token });
//         return;
//     }
//     }
//     res.status(401).send({ msg: 'Unauthorized' });
// });

// // DeleteAuth logout a user
// apiRouter.delete('/auth/logout', (req, res) => {
//     const user = Object.values(users).find((u) => u.token === req.body.token);
//     if (user) {
//     delete user.token;
//     }
//     res.status(204).end();
// });

//default

apiRouter.get('/project', (_req, res) => {
    console.log("in project");
    res.send(projects);
});

app.get('*', (_req, res) => {
    res.send({ msg: 'Jin service' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// tester
var test_data = {test:"testdata"};

apiRouter.get('/test', (_req, res) => {
    console.log("In Test");
    res.send(test_data);
});

