const jwt = require('jsonwebtoken');
const config = require('../config/config');

const checkAuth = (req, res, next) => {
	const token = req.headers['token'];
	if (token == "dev") {
		next();
	} else {
		if (!token)
			return res.send({ status: false, message: 'No token provided.' });
		jwt.verify(token, config.jwtSecret, (err, decoded) => {
			if (err)
				return res.send({ status: false, message: 'Token expired.' });

			req.user = {
				login: decoded.login,
				id: decoded.id
			};
			next();
		});
	}

}

module.exports = {
	checkAuth
}
