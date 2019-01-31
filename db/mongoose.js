var    mongoose        = require('mongoose'),
       mongoDB         = 'mongodb://adam:tucker49@ds117145.mlab.com:17145/squadup';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = {mongoose}