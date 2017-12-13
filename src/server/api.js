const { Router } = require('express')
const { authTokenRouter } = require('./auth-tokens/auth-token-router')
const { fileRouter } = require('./files/file-router')
const { userRouter } = require('./users/user-router')

const api = Router()

api.use('/auth-tokens', authTokenRouter)
api.use('/files', fileRouter)
api.use('/users', userRouter)

exports.api = api
