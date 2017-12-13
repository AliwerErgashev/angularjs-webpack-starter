const { Router } = require('express')
const { authTokenDao } = require('./auth-token-dao')
const { userDao } = require('../users/user-dao')

const authTokenRouterFactory = (authTokenDao, userDao) => {
  const router = Router()

  router.post('/', async (req, res) => {
    const { username, password } = req.body
    const [user] = await userDao.select({ username })
    if (!user || user.password !== password) {
      res.status(403).send({ message: 'Incorrect username or password' })
      return
    }
    const [authToken] = await authTokenDao.insert({ userId: user.id }, { returning: ['id'] })
    res.send(authToken)
  })

  router.get('/', async (req, res) => {
    const { authTokenId } = req.query
    try {
      const [userInfo] = await authTokenDao.getUserInfo(Number(authTokenId))
      res.send(userInfo)
    } catch (error) {
      res.status(500).send({ details: error.details })
    }
  })

  return router
}

exports.authTokenRouter = authTokenRouterFactory(authTokenDao, userDao)
