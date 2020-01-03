const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            console.log ("there was an error");
        }

        const decodedToken = jwt.verify(token, "I'm making curry chicken pitas for lunch");
        req.userData = {userId: decodedToken.userId};
        next();

    } catch {
        console.log ("there was an error");
    }
    
    
}