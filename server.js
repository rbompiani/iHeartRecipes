const express = require('express');
const app = express();
const port = process.env.Port || 5000;

// console log that the server is up and running
app.listen(port, ()=> console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req,res) => {
    res.send({express: 'Your Express Backend is Connected to React'});
})
