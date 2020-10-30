
function validateGetLocationOrganizationRequest(req,res){
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    const radius = req.params.radius;
    //Check if the coordinates param is existed or not
    if (latitude===undefined){
        return res.send({success:false,message:"latitude parameter missing."});
    }
    if (longitude===undefined){
        return res.send({success:false,message:"longitude parameter missing."});
    }
    if (radius===undefined){
        return res.send({success:false,message:"longitude parameter missing."});
    }
    const validatedData = {
        latitude:latitude,
        longitude:longitude,
        radius:radius

    };
    return validatedData;
}
module.exports = {
	validateGetLocationOrganizationRequest
}
