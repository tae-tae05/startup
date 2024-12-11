const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.set('trust proxy', true);

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/users', (_req, res) => {
    console.log("in users");
    res.send(users);
});

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

secureApiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });

secureApiRouter.get('/example_project/:num', async (req, res) => {
    try {
        const { num } = req.params;
        const object = await DB.findProject(num);
        if(!object) {
            return res.status(404).json({ error: 'Project not found '});
        }
        res.send(object);
    }
    catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ error: 'Internal server error'});
    }
});

secureApiRouter.get('/projects', async (req, res) => {
    const projects = await DB.getProjects();
    res.send(projects);
  });

secureApiRouter.post('/add_project', async (req, res) => {
    const project = { ...req.body, ip: req.ip };
    await DB.addProject(project);
    const projects = await DB.getProjects();
    res.send(projects);
});

secureApiRouter.post('/increment/:num/:index', async (req, res) => {
    const { num, index } = req.params;

    await DB.increment(num, index);
})

secureApiRouter.post('/decrease/:num/:index', async (req, res) => {
    const { num, index } = req.params;
    await DB.decrease(num, index);
})

app.get('*', (_req, res) => {
    res.send({ msg: 'Jin service' });
});

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);


