const Admin = require('../../../models/admin');

module.exports.register = async function(req, res){
    try{

        if(!(req.body.email && req.body.password)){
            return res.status(401).json({
                message: "Please enter email and password to complete the registration"
            });
        }

        let admin = await Admin.findOne({email:req.body.email});

        if(!admin){
            await Admin.create(req.body);

            return res.status(200).json({
                message: "Registration successful"
            });
        }else{
            return res.status(409).json({
                message: "Email address is already registered"
            });
        }
        
    }catch(err){
        console.log('Error :', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}