const { Router } = require('express')
const { userDao } = require('./user-dao')

const userRouterFactory = (userDao) => {
  const router = Router()

  router.get('/', async (req, res) => {
    try {
      const result = await userDao.select({})
      res.send(result.rows)
    } catch (error) {
      res.status(500).send({ detail: error.detail })
    }
  })

  return router
}

exports.userRouter = userRouterFactory(userDao)
