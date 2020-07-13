const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

const {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_SECRET,
} = process.env;

passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: GOOGLE_OAUTH_SECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
  })
);

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
