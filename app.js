const express = require('express');
const db = require('./config/db');
var path = require('path');

 
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
 
const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});

const routes = require('./routes/index');

app.use('/', routes);