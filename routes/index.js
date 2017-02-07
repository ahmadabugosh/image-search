const express = require('express');
const imgur = require('../services/imgur');
const router = express.Router();
 
router.get('/', (req, res) => {
  res.send('Hello');
});
 
router.get('/latest', (req, res) => {
});
 
router.get('/search/:q', (req, res) => {


imgur.getImage(req.params.q, req.query.offset).then(ans => {
  res.json(ans);
});
});
 
module.exports = router;