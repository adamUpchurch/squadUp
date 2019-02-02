var router = require('express').Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'SQUADUP.gg', name: 'Adam' });
});

router.get('/ninja', (req, res, next) => {
  
  // TODO: Make this route dynamic to accept either a squad or streamer name
  // Return profile of user/squad

  res.render('stream', {streamers: ['drlupo', 'ninja', 'ninja', 'ninja']})
})

module.exports = router;
