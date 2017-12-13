const { BaseDao } = require('../base-dao')
const { pool } = require('./pool')

class FileDao extends BaseDao {
  constructor(pool) {
    super(pool, 'files')
  }
}

exports.fileDao = new FileDao(pool)
