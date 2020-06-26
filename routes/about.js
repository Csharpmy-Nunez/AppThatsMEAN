const express = require('express');
const router = express.Router();

//Index route
router.get('/about', (req, res) => {
  res.render('about');
});


//Export router
module.exports = router;