const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

let users = [];
let scores = [];

app.use(express.json());

const port = process.argv.length > 2 ? process.argv[2] : 4000;


let apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.use(express.static('public'));

apiRouter.post('auth/signup', async (req, res) => {


}
)

async function findUser(field, name) {
    
}

