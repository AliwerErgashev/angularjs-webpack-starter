const { BaseDao } = require('../base-dao');
const { pool } = require('../pool');

class UserDao extends BaseDao {
  constructor(pool) {
    super(pool, 'users');
  }
}

const userDao = new UserDao(pool)

exports.UserDao = UserDao;
exports.userDao = userDao;
