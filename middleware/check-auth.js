const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			console.log('no token is available on the server');
		}

		const decodedToken = jwt.verify(
			token,
			"I'm making curry chicken pitas for lunch"
		);
		console.log(decodedToken);
		req.userData = { userId: decodedToken.userId };
		next();
	} catch {
		console.log('there was another error on the server, but a token exists');
	}
};
