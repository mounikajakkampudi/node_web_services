function validateAddOrganizationRequest(req,res, callback){
    const name = req.body.data.name;
    var validatedParams = req.body.data;
    if (name){
        validatedParams.name = name;
        callback(validatedParams);
    }else{
        res.send({success:false,message:"Please enter name."});
    }
}
module.exports = {
	validateAddOrganizationRequest
}
