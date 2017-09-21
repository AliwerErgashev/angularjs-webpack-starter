class BaseDao {
  constructor(pool, table) {
    this.pool = pool;
    this.table = table;
  }

  select() {
    return this.pool.query(`select * from ${this.table}`, [])
      .then(result => result.rows);
  }
}

exports.BaseDao = BaseDao;
