var express = require('express');
var router = express.Router();
var users = require('../midlewares/user_service.js');

/* GET home page. */
router.get('/', users.get_login_user, function(req, res, next) {
  var display_name = "";
  if (req.user != null) {
    display_name = req.user.name
  }
  res.render('index', {
    display_name: display_name,
    title: 'Express'

  });


});

module.exports = router;
