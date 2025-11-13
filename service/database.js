const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userDatabase = db.collection('users');
const scoreDatabase = db.collection('scores');


(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

async function setUser(user) {
    await userDatabase.insertOne(user);
}

function findUser(userName) {
    return userDatabase.findOne({userName: userName});
}

function findUserByToken(token) {
    return userDatabase.findOne({token: token})
}

async function logoutUser(user) {
    await userDatabase.updateOne({userName: user.userName}, { $set: {token: null} })
}

async function updateUser(user) {
    await userDatabase.updateOne({userName: user.userName}, { $set: {token: user.token} })
}

async function setScore(score) {
    await scoreDatabase.insertOne(score);
}

function getScore(userName) {
    return scoreDatabase.findOne({userName: userName})
}


module.exports = {
  findUser,
  findUserByToken,
  setUser,
  logoutUser,
  updateUser,
  setScore,
};