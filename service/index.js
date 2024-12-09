const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

app.use(express.json());

app.use(cookieParser());

app.set('trust proxy', true);


//router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/users', (_req, res) => {
    console.log("in users");
    res.send(users);
});

// create a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
  });

// login existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// logout user
secureApiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });

secureApiRouter.get('/example_project', async (req, res) => {
    console.log("in example project");
    const project = await DB.findProject();
    res.send(project);
});

secureApiRouter.get('/projects', async (req, res) => {
    const projects = await DB.getProjects();
    res.send(projects);
  });

secureApiRouter.post('/new_project', async (req, res) => {
    const project = { ...req.body, ip: req.ip };
    await DB.addProject(project);
    const projects = await DB.getProjects();
    res.send(projects);
});

secureApiRouter.post('/update_project', async (req, res) => {
    const projects = await DB.getProjects();
    const type = { ...req.body, ip: req.ip };

});

app.get('*', (_req, res) => {
    res.send({ msg: 'Jin service' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }



