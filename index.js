const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // This sets the cookie to 30 days. Because it's received as milliseconds. 30 days * 24 hrs per day * 60 mins per hour * 60 seconds per min * 1000 milliseconds per second.
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

// Dynamic Port Binding. Written this way to account for dev and prod.
const PORT = process.env.PORT || 5000;
app.listen(PORT);

