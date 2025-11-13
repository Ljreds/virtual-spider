
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';


app.use(express.json());

app.use(cookieParser());

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.use((_req, res) => {
  res.sendFile('index.htm', { root: 'public'});
});

apiRouter.post('/auth/signup', async (req, res) => {
  if(await findUser('userName', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  }

  const user = await createUser(req.body.username, req.body.password);
  setAuthCookie(res, user.token);
  res.send({userName: user.userName})

});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('userName', req.body.username);
  if(user) {
    if(await bcrypt.compare(req.body.password, user.password)){
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({userName: user.userName});
      return;
    }
    res.status(401).send({ msg: 'Unauthorized' });
  }

});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if(user) {
    DB.logoutUser(user)
  }
  res.clearCookie(authCookieName)
  res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

apiRouter.post('/score', verifyAuth, (req, res) => {
  const scores = updateScores(req.body);
  res.send(scores);
});


apiRouter.get('/scores', verifyAuth, async (req, res) => {
  const scores = await DB.findScores();
  res.send(scores);
});

apiRouter.get('/highscore', verifyAuth, async (req, res) => {
  const highscore = await DB.findHighscore();
  res.send(highscore);
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

async function createUser(userName, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
  }

  await DB.setUser(newUser);

  return newUser;
}

async function findUser(field, name) {
  if (!name) return null;

  if (field === 'token'){
    return DB.findUserByToken(name);
  }

  return DB.findUser(name);
}

async function updateScores(newScore){
  DB.updateScore(newScore)
  return DB.findScores();
}





function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});