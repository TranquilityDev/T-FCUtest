var express = require('express');
var router = express.Router();
//Get the Data from local 
var videodata = require('../public/Data/videodata.json');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
		'databoard', { 
			title: 'Tranquility-Teacher-Databoard',
			//define video 
			videodata: videodata

			 });
		});

module.exports = router;
