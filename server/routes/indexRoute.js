var router = require('express').Router(),
    passport    = require('passport');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'SQUADUP.gg', name: 'req.user' });
});
router.get('/accountPage', (req, res) => {
  console.log(req.user.twitch.displayname)
  res.render('index', { title: 'SQUADUP.gg', name: req.user.twitch.display_name });
});

router.get('/ninja', (req, res, next) => {
  
  // TODO: Make this route dynamic to accept either a squad or streamer name
  // Return profile of user/squad

  res.render('stream', {streamers: ['drlupo', 'ninja', 'ninja', 'ninja']})
})

module.exports = router;
