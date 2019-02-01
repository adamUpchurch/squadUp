var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./db/mongoose')

var indexRouter = require('./routes/indexRoute');
var streamerRouter = require('./routes/streamerRoute');
var squadRouter = require('./routes/squadRoute');

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
app.use('/streamer', streamerRouter);
app.use('/squad', squadRouter);

module.exports = app;
