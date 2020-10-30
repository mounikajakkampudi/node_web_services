const Queries = require('../models').Queries;
const pgdb = require('../utils/pgdb');

async function getUserEarnings(data){
	const queryDetails = Queries.getUserEarnings(data);
	const result = await pgdb.query(queryDetails.query,queryDetails.params);
	console.log("Outside");
	return result;
};

async function getAllEarnings(){
	const queryDetails = Queries.getAllEarnings();
	const result = await pgdb.query(queryDetails.query,null);
	console.log("Outside");
	return result;
};

module.exports = {
	getUserEarnings,
	getAllEarnings
};
