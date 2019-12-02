const express = require('express');
const app = express();
const port = process.env.Port || 5000;
const db = require("./models");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

//should submit-recipe to database//
app.post('/submit-recipe', (req, res) => {
    console.log('storing a recipe...');
    console.log(req.body);
    let img=("/images/fooddefault.jpeg");
    if(req.body.img){
        img = req.body.img;
    } 

    db.Recipe
        .findOrCreate({
            where:
            {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                img: img,
                yield: req.body.yield,
                time: req.body.time,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions
            }
        })
        .then(([recipe, created]) => {
            if (!created) {
                res.send('Something went wrong');
                res.end();
            }
        });

})