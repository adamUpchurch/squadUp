var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('../server/db/mongoose')

var indexRouter = require('../server/routes/indexRoute');
var streamerRouter = require('../server/routes/streamerRoute');
var squadRouter = require('../server/routes/squadRoute');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/streamer', streamerRouter);
app.use('/api/squad', squadRouter);

module.exports = app;
