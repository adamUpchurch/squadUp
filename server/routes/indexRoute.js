var router      = require('express').Router(),
    passport    = require('passport'),
    {Streamer}    = require('../models/streamerModel'),
    {Squad}     = require('../models/squadModel');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'SQUADUP.gg'});
});

router.get('/profile/edit', (req, res) => {
  console.log(req.user)
  res.render('edit_profile', { title: 'SQUADUP.gg', user: req.user });
});

router.get('/profile', (req, res) => {
  console.log(req.user)
  res.render('profile/profile1', { title: 'SQUADUP.gg', user: req.user });
});

router.get('/gamer/:streamer', (req, res, next) => {
  
  // TODO: Make this route dynamic to accept either a squad or streamer name
  console.log('Finding: ' + req.params.streamer)
  Streamer.findOne({'twitch.name': req.params.streamer}, (error, foundStreamer) => {
    if(error) {
      console.log(error)
      res.redirect('/')
    }
    else {
      console.log('Found: ', foundStreamer)
      res.render('profile', { title: 'SQUADUP.gg', user: foundStreamer });
    }
  })
})

router.get('/:squad', (req, res, next) => {
  
  console.log('Finding Squad: ' + req.params.squad)
  Squad.findOne({name: 'Trill Squad'}, (error, foundSquad) => {
    if(error) {
      console.log(error)
      res.redirect('/')
    }
    else {
      console.log('Found: ', foundSquad)
      res.render('squadPage', { title: 'SQUADUP.gg', squad: foundSquad });
    }
  })
})

module.exports = router;
