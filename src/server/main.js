const express = require('express');
const app = express();
const { api } = require('./api');

app.use(express.static('public'));

app.use('/api', api);

app.listen(9000, () => console.log('HTTP server up on port 9000'));
