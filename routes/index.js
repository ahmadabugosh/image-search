const express = require('express');
const router = express.Router();
 
router.get('/', (req, res) => {
  res.send('Hello');
});
 
router.get('/latest', (req, res) => {
});
 
router.get('/search/:q', (req, res) => {
});
 
module.exports = router;