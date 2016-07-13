var express = require('express');
var router = express.Router();
var passportFacebook = require('../auth/facebook');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

router.get('/auth/facebook', passportFacebook.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  });



module.exports = router;
