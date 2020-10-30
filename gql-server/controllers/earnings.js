const earningsService = require('../services/earnings');

async function getUserEarnings(req, res) {
	const user_id = req.params.user_id;
	const data = {
		user_id: user_id
	}
	const result = await earningsService.getUserEarnings(data);
	console.log("Outside");
	res.send({
		success: true,
		data: result.rows,
		total_pages: 1
	});
};

async function getAllEarnings(req, res) {
	const result = await earningsService.getAllEarnings();
	console.log("Outside");
	res.send({
		success: true,
		data: result.rows,
		total_pages: 1
	});
};

module.exports = {
    getUserEarnings,
    getAllEarnings
}