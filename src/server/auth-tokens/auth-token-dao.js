const { BaseDao } = require('../base-dao')
const { pool } = require('../pool')

class AuthTokenDao extends BaseDao {
  constructor(pool) {
    super(pool, 'authTokens')
  }

  getUserInfoQuery(authTokenId) {
    return {
      type: 'select',
      table: 'users',
      alias: 'u',
      columns: ['username'],
      joins: [
        {
          target: 'authTokens',
          alias: 'a',
          on: {
            'userId': '$u.id$',
            'id': authTokenId
          }
        }
      ]
    }
  }

  async getUserInfo(authTokenId) {
    const result = await this.runMongoSqlQuery(this.getUserInfoQuery(authTokenId))
    return result.rows
  }
}

exports.authTokenDao = new AuthTokenDao(pool)
