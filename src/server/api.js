const { Router } = require('express');
const { userRouter } = require('./users/user-router');

const api = Router();

api.use('/users', userRouter);

exports.api = api;
