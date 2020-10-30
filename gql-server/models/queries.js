const getUserTransactions = (data) => {
    const query = 'SELECT trs.*, org.name FROM testing.transactions trs ' + 
	'LEFT JOIN testing.organizations org ON trs.organization_id = org.id WHERE trs.user_id=$1';
	const params = [data.user_id];
	console.log("getUserTransactions = " + query);
    return ({
        query:query,
        params:params
    })
}
const getUserFavourites = (data) => {
    const query = 'SELECT fav.*, org.* FROM testing.favourites fav ' + 
	'LEFT JOIN testing.organizations org ON fav.organization_id = org.id WHERE fav.user_id=$1';
	const params = [data.user_id];
	console.log("getUserTransactions = " + query);
    return ({
        query:query,
        params:params
    })
}

const getUserRequests = (data) => {
    const query = 'SELECT req.*, org.* FROM testing.requests req ' + 
	'LEFT JOIN testing.organizations org ON req.organization_id = org.id WHERE req.user_id=$1';
	const params = [data.user_id];
	console.log("getUserRequests = " + query);
    return ({
        query:query,
        params:params
    })
}

const getUserBids = (data) => {
    const query = 'SELECT req.*, org.* FROM testing.bids req ' + 
	'LEFT JOIN testing.organizations org ON req.organization_id = org.id WHERE req.user_id=$1';
	const params = [data.user_id];
	console.log("getUserBids = " + query);
    return ({
        query:query,
        params:params
    })
}

const getAllBids = () => {
    const query = 'SELECT pro.*, usr.* FROM testing.bids pro ' + 
	'LEFT JOIN testing.users usr ON pro.user_id = usr.id';
	const params = [];
	console.log("getAllBids = " + query);
    return ({
        query:query,
        params:params
    })
}

const getProblems = () => {
    const query = 'SELECT pro.*, usr.* FROM testing.problems pro ' + 
	'LEFT JOIN testing.users usr ON pro.user_id = usr.id';
	const params = [];
	console.log("getUserRequests = " + query);
    return ({
        query:query,
        params:params
    })
}

const getUserEarnings = (data) => {
    const query = 'SELECT ear.*, org.* FROM testing.earnings ear ' + 
	'LEFT JOIN testing.organizations org ON ear.organization_id = org.id WHERE ear.user_id=$1';
	const params = [data.user_id];
	console.log("getUserRequests = " + query);
    return ({
        query:query,
        params:params
    })
}

const getAllEarnings = () => {
    const query = 'SELECT ear.* FROM testing.earnings ear';
	console.log("getUserRequests = " + query);
    return ({
        query:query
    })
}

const getTimesheetByPeriod = (period_type, period_id, year) => {
    const query = `SELECT testing.Fetch_Records_By_Period('${period_type}',${period_id}, ${year});`;
    return ({
        query:query,
        params:null
    })
}


module.exports = {
    getUserTransactions,
    getUserRequests,
    getUserEarnings,
    getUserFavourites,
    getProblems,
    getUserBids,
    getAllBids,
    getTimesheetByPeriod,
    getAllEarnings
};
