const   passport        = require('passport'),
        TwitchStrategy  = require('passport-twitchtv').Strategy,
        {Twitch}        = require('./keys'), // imports secret information
        {Streamer}      = require('../server/models/streamerModel');

passport.serializeUser((streamer, done) => done(null, streamer._id));
passport.deserializeUser((id, done) => Streamer.findById(id).then(streamer => done(null, streamer)));

passport.use(new TwitchStrategy({
    clientID: Twitch.id,
    clientSecret: Twitch.secret,
    callbackURL: '/auth/twitch/redirect',
    scope: 'user_read'
},
(accessToken, refreshToken, profile, done) => {
    console.log(profile._json._id)


    Streamer.findOneAndUpdate(
        { "twitch._id": profile._json._id },
        {
            "twitch.display_name": profile._json.display_name,
            "twitch.name": profile._json.name,
            "twitch.bio": profile._json.bio,
            "twitch.logo": profile._json.logo,
            "twitch._link": profile._json._link,
            "twitch.email": profile._json.email,
        }, {
            upsert: true,
            returnOriginal: false
        }, (error, streamer) => {
            if (error) console.log(error)
            else return done(null, streamer)
        }
        )}))