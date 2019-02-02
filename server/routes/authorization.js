var router      = require('express').Router(),
    passport    = require('passport');

router.get('/login', (req, res) => {
    res.send('Login page')
});

router.get('/twitch', passport.authenticate('twitchtv'),
    (req, res) => {
        res.send('Logged in with twitch.')
})

router.get('/logout', (req, res) => {
    res.send('Logging out')
})

module.exports = router