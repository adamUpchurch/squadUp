var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'SQUADUP.gg', name: 'Adam' });
});

router.get('/ninja', (req, res, next) => {
  res.render('stream', {streamers: ['drlupo', 'ninja', 'ninja', 'ninja']})
})

module.exports = router;
