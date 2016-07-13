var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../models/user');
var config = require('../config/passport.js');
var init = require('./init');

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      facebookId: profile.id
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if (err) {
        return cb(err);
      } else {
        return cb(null, user);
      }
    });
  }



));

init();

module.exports = passport;
