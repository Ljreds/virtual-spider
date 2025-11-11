const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userDatabase = db.collection('users');
const scoreDatabase = db.collection('scores');

async function setUser(user) {
    await userDatabase.insertOne(user);
}

function findUser(userName) {
    return userDatabase.findOne({userName: userName});
}

function findUserByToken(token) {
    return userDatabase.findOne({token: token})
}

async function updateUser(user) {
    await userDatabase.updateOne({userName: user.userName}, { $set: user })
}