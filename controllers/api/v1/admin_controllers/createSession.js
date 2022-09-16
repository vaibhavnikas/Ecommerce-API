const Admin = require('../../../../models/admin');
const jwt = require('jsonwebtoken');
const env = require('../../../../config/environment');

module.exports = async function(req, res){
    try{
        if(!(req.body.email && req.body.password)){
            return res.status(401).json({
                message: "Please enter email and password to create session"
            });
        }

        let admin = await Admin.findOne({email: req.body.email});

        if(!admin || admin.password != req.body.password){
            return res.status(422).json({
                message: "Invalid email or password"
            });
        }else{
            return res.status(200).json({
                message: "Session created successfully !",
                data: {
                    message: 'Here is your token, please keep it safe',
                    token: jwt.sign(admin.toJSON(), env.jwtSecret, {expiresIn: '10000000'})
                }
            });
        }

    }catch(err){
        console.log('Error :', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}