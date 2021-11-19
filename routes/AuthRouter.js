const express = require('express');
const { sineUp, login, makeAdmin } = require('../controllers/AuthController');
const Admin = require('../Middleware/Admin');
const { auth } = require('../Middleware/Auth');

const authRouter = express.Router();

authRouter.post('/signup', sineUp);

authRouter.post('/login', login);

authRouter.get('/admin/:email', auth, Admin, makeAdmin);

module.exports = authRouter;
