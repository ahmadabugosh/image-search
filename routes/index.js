const express = require('express');
const imgur = require('../services/imgur');
const History = require('../models/history');
const router = express.Router();
 
router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to the Image Search API' });
});
 
router.get('/latest', (req, res) => {
	
History.find({}, 'term when -_id').sort('-when').limit(10).then(results => {
  res.json(results);
});
});
 
router.get('/search/:q', (req, res) => {

imgur.getImage(req.params.q, req.query.offset).then(ans => {
	new History({ term: req.params.q }).save();
  res.json(ans);
});
});
 
module.exports = router;