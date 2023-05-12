const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use('/bad', (req, res) => {
  res.send("<h1>Wrong fricken Route!</h1>")
});

module.exports = router;