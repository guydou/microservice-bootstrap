var request = require('request');

var user_service = {};
user_service.get_login_user = function(req, res, next) {
  var token = req.query.token;

  if (token != "") {
    request('http://user_service:3000/users_service/get_user?token=' + token,
      function(

        error, response, body) {
        if (!error && response.statusCode == 200) {
          req.user = JSON.parse(body);
          console.log(body); // Show the HTML for the Google homepage.
          next();
        } else {
          console.log(error);
          next(error);
        }

      });
  } else {
    next();
  }


}



module.exports = user_service;
