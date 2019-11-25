const express = require('express');
const path = require('path');
const queries = require('./src/queries');
const app = express();
const controllers = require('./src/controllers');


app.use(express.static(path.join(__dirname, 'barberia/build')));
app.use('/api', controllers);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);