var dotenv = require('dotenv');
dotenv.load();
//const connection = 'mongodb://ahmadabugosh:123456@ds147079.mlab.com:47079/image-search';
const connection= `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
 
exports.db = mongoose.connect(connection);