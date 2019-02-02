var    mongoose        = require('mongoose'),
       {MongoDB}         = require('../../config/keys')

mongoose.connect(MongoDB.dbURI);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = {mongoose}