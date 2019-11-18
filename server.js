const express = require('express');
const app = express();
const port = process.env.Port || 5000;
const db = require("./models");

// create a GET route
app.get('/express_backend', (req,res) => {
    res.send({express: 'Your Express Backend is Connected to React'});
})

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});
