
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require('express');
const app = express();

const authCookieName = 'token';

let users = [];
let scores = [];

app.use(express.json());

app.use(cookieParser());

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

let apiRouter = express.Router();
app.use(`/api`, apiRouter);



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
      setAuthCookie(res, user.token);
      res.send({userName: user.userName});
      return;
    }
    res.status(401).send({ msg: 'Unauthorized' });
  }

});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('userName', req.cookies[authCookieName]);
  if(user) {
    delete user.token;
  }
  res.clearCookie(authCookieName)
  res.status(204).end();
});


async function createUser(userName, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
  }

  users.push(newUser)

  return newUser;
}

async function findUser(field, name) {
    return users.find((u) => u[field] === name);
}






function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}