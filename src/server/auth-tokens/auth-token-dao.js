const { BaseDao } = require('../base-dao');
const { pool } = require('../pool');

class AuthTokenDao extends BaseDao {
  constructor(pool) {
    super(pool, 'auth_tokens');
  }

  async insert(userId) {
    const result = await this.pool.query(`insert into auth_tokens (user_id) values ($1) returning id`, [userId]);
    return result.rows;
  }

  async selectByUsername(username) {
    const result = await this.pool.query(`select * from users where username = $1`, [username]);
    return result.rows;
  }

  async getUserInfo(authTokenId) {
    console.log(typeof authTokenId);
    const result = await this.pool.query(`select u.username from users u join auth_tokens a on a.user_id = u.id where a.id = $1`, [authTokenId]);
    return result.rows;
  }
}

exports.authTokenDao = new AuthTokenDao(pool);
