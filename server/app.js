var express         = require('express'),
    path            = require('path'),
    cookieParser    = require('cookie-parser'),
    logger          = require('morgan'),
    db              = require('../server/db/mongoose'),
    passportSetUp   = require('../config/passport-setup');

var indexRouter     = require('../server/routes/indexRoute'),
    streamerRouter  = require('../server/routes/streamerRoute'),
    squadRouter     = require('../server/routes/squadRoute'),
    authRouter      = require('../server/routes/authorization');

var app = express();

app.set('views', __dirname + '/views');
console.log(__dirname)
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
app.use('/auth', authRouter)

module.exports = app;
