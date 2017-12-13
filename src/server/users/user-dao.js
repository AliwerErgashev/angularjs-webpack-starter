const { BaseDao } = require('../base-dao')
const { pool } = require('../pool')

class UserDao extends BaseDao {
  constructor(pool) {
    super(pool, 'users')
  }
}

exports.userDao = new UserDao(pool)
