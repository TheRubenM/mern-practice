const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const app = express();

require('./routes/authRoutes')(app);

// Dynamic Port Binding. Written this way to account for dev and prod.
const PORT = process.env.PORT || 5000;
app.listen(PORT);

