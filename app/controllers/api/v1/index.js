const router = require('express').Router(),
  testController = require('./test');

router.use('/test', testController);
console.log('API v1 loaded');

module.exports = router;
