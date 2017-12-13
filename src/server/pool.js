const { Pool } = require('pg')
const { db: { host, port, name: database, user, password } } = require('../../config/default.json')

exports.pool = new Pool({ host, port, database, user, password })
