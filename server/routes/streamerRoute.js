var express = require('express');
var router = express.Router();
var streamer = require('../controllers/streamerController')

router.route('/') // routes complete
  .get(streamer.list)
  .post(streamer.register)

router.route('/:streamer_id') 
  .get(streamer.detail)
  .put(streamer.update)
  .delete(streamer.delete)

module.exports = router;
