const userModel = require("../models/user.model");
const hashPass = require("../middleware/encryptPassword");
const auth = require("../middleware/authentication");


exports.login = (req,res,next)=>{

    userModel.findOne({email : req.headers["email"]}).then((userData)=>{ 
        console.log(userData)
      if(userData != null){
    hashPass.ComparePassword(userData.password,req.headers["password"]).then((result)=>{
        auth.createToken({email:userData.email,password : userData.password}).then((token)=>{
            res.status(200).json({Sucess : true ,Token: token})
         }).catch(()=>{
            res.status(200).json({Sucess : true , message: token})
         })
    }).catch((error)=>{
        res.status(200).json({
            sucess: "false",
            messgae: "email/password is not correct"
        })
    })
      }
      else {
        res.status(200).json({
            sucess : "false",
            messgae: "email/password  is not registered"
        })
      }
    

    }).catch((error)=>{
        res.status(500).json({
            sucess : "false",
            messgae: "User is not registered"
        })
    })
}
