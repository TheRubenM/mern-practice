const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there. Deployed and Ready.'});
});

// Dynamic Port Binding. Written this way to account for dev and prod.
const PORT = process.env.PORT || 5000;
app.listen(PORT);