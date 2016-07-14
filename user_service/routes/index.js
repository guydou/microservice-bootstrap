var express = require('express');
var router = express.Router();
var passportFacebook = require('../auth/facebook');
var jwt = require('jwt-simple');
var secret = "bllla"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', function(req, res, next) {
  req.session.backURL = req.header('Referer') || '/';
  res.send('Go back and register!');
});

router.get('/auth/facebook', passportFacebook.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    var payload = req.user;

    var token = jwt.encode(payload, secret);

    res.redirect("/web/?token=" + token)



    // Successful authentication

  });

router.get('/get_user', function(req, res, next) {
  var token = req.query.token;
  var payload = jwt.decode(token, secret);
  res.json(payload);

});


module.exports = router;
