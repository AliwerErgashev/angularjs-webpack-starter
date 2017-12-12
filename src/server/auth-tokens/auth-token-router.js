const { Router } = require('express');
const { authTokenDao } = require('./auth-token-dao');

const authTokenRouterFactory = (authTokenDao) => {
  const router = Router();

  router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const [user] = await authTokenDao.selectByUsername(username);
    if (user.password !== password) {
      res.status(403).send({ message: 'Incorrect username or password' })
    }
    const [authToken] = await authTokenDao.insert(user.id);
    res.send(authToken);
  })

  router.get('/', async (req, res) => {
    const { authTokenId } = req.query;
    const [userInfo] = await authTokenDao.getUserInfo(Number(authTokenId));
    res.send(userInfo);
  })

  return router;
}

exports.authTokenRouter = authTokenRouterFactory(authTokenDao);
