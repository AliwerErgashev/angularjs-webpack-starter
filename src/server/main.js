const express = require('express')
const bodyParser = require('body-parser')
const { api } = require('./api')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/api', api)

app.listen(9000, () => console.info('HTTP server up on port 9000'))
