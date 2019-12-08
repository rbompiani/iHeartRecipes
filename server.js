const express = require('express');
const app = express();
const port = process.env.Port || 5000;
const db = require('./models');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HttpError = require('./server_models/http-error');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((error, req,res,next) =>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occurred."});
})


// create a GET route
app.get('/express_backend', (req,res) => {
    res.send({express: 'Your Express Backend is Connected to React'});
})

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});

// ---------- USER ROUTES ----------//
// SIGNUP route for new accounts
app.post('/signup', (req,res) => {
    const {email, password, first, last} = req.body;

    let hashedPassword;
    try {
       bcrypt.hash(password, 12).then(function(hashed){
           hashedPassword=hashed

            db.Users.findOrCreate({
                where: {
                    email:email,
                    password: hashedPassword,
                    first: first,
                    last: last
                }
            }).then(([user,created]) => {
                if (!created){
                    res.send('Something went wrong');
                    res.end();
                } else {
                    let token;
                    try{
                        token = jwt.sign(
                            {userId: user.id, email: user.email}, 
                            "I'm making curry chicken pitas for lunch", 
                            {expiresIn: '1hr'}
                        );    
                    } catch (err){
                        const error = new HttpError('Signin failed. Please try again', 500);
                        return next(error);
                    }
        
                    res
                    .status(200)
                    .json({userId: user.id, email: user.email, token: token})           
                }
            })
        }); 
    } catch (err) {
        const error = new HttpError('Could not create user. Please try again', 500);
        return next(error);
    }
    
})

// LOG IN route for users to log in
app.get('/login', (req,res) =>{
    const {email, password} = req.body;

    db.Users.findOne({
        where: {email: email}
    }).then(user => {
        let isValidPassword = false;
        try {
           bcrypt.compare(password, user.password).then(function(res){isValidPassword = res}); 
        } catch (err) {
            const error = new HttpError("Could not log you in. Please check your credentials and try again", 500);
            return next(error);
        }

        if(!isValidPassword){
            console.log("not the right credentials, bro");
        } else {
            let token;
            try {
                token = jwt.sign(
                    {user: user.id, email: user.email},
                    "I'm making curry chicken pitas for lunch", 
                    {expiresIn: '1hr'}
                )
            } catch (err) {
                const error = new HttpError("Server error while logging in. Please try again", 500);
                return next(error)
            }
            res
            .status(200)
            .json({userId: user.id, email: user.email, token: token});
        }
    })
})

// LOG OUT route for users to log in
app.get('/logout', (req,res) =>{
    db.Users.findOne({
        where: {email: email}
    }).then(user => {
        res.send({user});
      })
})

// ---------- RECIPE ROUTES ----------//
// GET RECIPES route for recipebox
app.get('/recipebox', (req,res) => {
    db.Recipe.findAll().then(recipes=>{
        res.send({recipes});
    })
})

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