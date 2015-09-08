var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nquestGetTest', function ( req, res ) {
  var data ={
    username: req.query.username,
    age: req.query.age
  };
  console.log(data);
  res.json(data);
});

router.post('/nquestPostTest', function ( req, res ) {
  var data ={
    username: req.body.username,
    age: req.body.age
  };
  console.log(data);
  res.json(data);
});

module.exports = router;
