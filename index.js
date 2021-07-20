const express = require('express');
require('./services/passport');


const app = express();

require('./routes/authRoutes')(app);

// Dynamic Port Binding. Written this way to account for dev and prod.
const PORT = process.env.PORT || 5000;
app.listen(PORT);