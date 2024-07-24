//IMPORT EXPRESS ROUTER AND MODELS
const router = require('express').Router();
const apiRoutes = require('./api');

//THE /API ENDPOINT
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

//EXPORT MODULE
module.exports = router;