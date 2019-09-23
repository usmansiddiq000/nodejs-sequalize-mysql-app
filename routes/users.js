var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add-user', function(req, res, next) {
   db.User.create({
    name :'test',
    gender:'male',
    nikname:'tt',
    createdAt:Date.now(),
    updateAt:Date.now()
  })
  .then((user) => {
    res.json(user)
  })
  .catch((error) => {
    res.json(error)
  })
});

module.exports = router;
