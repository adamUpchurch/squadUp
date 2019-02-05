var router      = require('express').Router(),
    passport    = require('passport');

router.get('/twitch', passport.authenticate('twitchtv'),
    (req, res) => {
})

router.get('/twitch/redirect', passport.authenticate('twitchtv'), (req, res) => {
    console.log(req.user);
    res.redirect('/accountPage')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router