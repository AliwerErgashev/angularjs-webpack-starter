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
    console.log(authToken);
    res.send(authToken);
  })

  router.get('/', async (req, res) => {
    const { authTokenId } = req.query;
    console.log(authTokenId);
    const [userInfo] = await authTokenDao.getUserInfo(Number(authTokenId));
    console.log(userInfo);
    res.send(userInfo);
  })

  return router;
}

exports.authTokenRouter = authTokenRouterFactory(authTokenDao);
