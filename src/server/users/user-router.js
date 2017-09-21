const { Router } = require('express');
const { UserDao, userDao } = require('./user-dao');

/**
 * 
 * @param {UserDao} userDao
 * @returns Router
 */
const userRouterFactory = (userDao) => {
  const router = Router();

  router.get('/', (req, res) => {
    userDao.select({})
      .then(users => res.send(users))
      .catch(err => res.status(500).send({ detail: err.detail }));
  });

  return router;
};

const userRouter = userRouterFactory(userDao);

exports.userRouterFactory = userRouterFactory;
exports.userRouter = userRouter;
