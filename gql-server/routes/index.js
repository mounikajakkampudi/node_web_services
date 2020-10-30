const earningsRouter = require('./earnings');

module.exports.set = (app) => {
	earningsRouter(app);
}