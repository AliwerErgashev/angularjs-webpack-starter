const { sql } = require('mongo-sql')

class BaseDao {
  constructor(pool, table) {
    this.pool = pool
    this.table = table
  }

  async runSqlQuery(sqlQuery, values) {
    return this.pool.query(sqlQuery, values)
  }

  async runMongoSqlQuery(mongoSqlQuery) {
    const { query, values } = sql(mongoSqlQuery)
    return this.runSqlQuery(query, values)
  }

  selectQuery(where) {
    return {
      type: 'select',
      table: this.table,
      where
    }
  }

  async select(where) {
    const result = await this.runMongoSqlQuery(this.selectQuery(where))
    return result.rows
  }

  insertQuery(values, options) {
    const { returning } = options
    return {
      type: 'insert',
      table: this.table,
      values,
      returning
    }
  }

  async insert(values, options) {
    const result = await this.runMongoSqlQuery(this.insertQuery(values, options))
    return result.rows
  }
}

exports.BaseDao = BaseDao
