const   passport        = require('passport'),
        TwitchStrategy  = require('passport-twitchtv').Strategy,
        {Twitch}        = require('./keys'), // imports secret information
        User            = require('../server/models/streamerModel');


passport.use(new TwitchStrategy({
    clientID: Twitch.id,
    clientSecret: Twitch.secret,
    callbackURL: '/auth/twitchtv/callback',
    scope: 'user_read'
},
(accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ twitchtvId: profile.id }, (err, user) => {
        return done(err, user)
    })
}))