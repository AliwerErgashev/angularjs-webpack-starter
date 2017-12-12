const { Router } = require('express');
const { userRouter } = require('./users/user-router');
const { authTokenRouter } = require('./auth-tokens/auth-token-router');

const api = Router();

api.use('/users', userRouter);
api.use('/auth-tokens', authTokenRouter);

exports.api = api;
