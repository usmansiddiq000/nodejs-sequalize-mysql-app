var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // db.sequelize.query('call getUsers()')
  // .then(user => {
  //   console.log(user)
  // })
  // .catch(error => {
  //   console.log(error)
  // })

  db.sequelize.query(`call getUsersWithInput(${1})`)
  .then(user => {
    console.log(user[0].id)
  })
  .catch(error => {
    console.log(error)
  })
  res.send('This is user page ')
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
