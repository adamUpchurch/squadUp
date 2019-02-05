var router      = require('express').Router(),
    passport    = require('passport'),
    {Streamer}    = require('../models/streamerModel');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'SQUADUP.gg', name: 'req.user' });
});
router.get('/profile', (req, res) => {
  console.log(req.user)
  res.render('profile', { title: 'SQUADUP.gg', user: req.user });
});

router.get('/:streamer', (req, res, next) => {
  
  // TODO: Make this route dynamic to accept either a squad or streamer name
  // Return profile of user/squad
  console.log('Finding: ' + req.params.streamer)
  Streamer.findOne({'twitch.name': req.params.streamer}, (error, foundStreamer) => {
    if(error) {
      console.log(error)
      res.redirect('/')
    }
    else {
      console.log('Found: ', foundStreamer)
      console.log('Streaming with ', foundStreamer.isStreaming.with)
      res.render('stream', {squad: foundStreamer.isStreaming.with})
    }
  })
})

module.exports = router;
