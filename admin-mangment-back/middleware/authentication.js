const jwt = require('jsonwebtoken')

class Authentication {
    static createToken(TokenPayLoadObj){
        return new Promise((resolve,reject)=>{
         try{   
        const token = jwt.sign(TokenPayLoadObj,process.env.JWT_KEY,{expiresIn: "3h"});
        resolve(token)
         }catch(err){
            reject(err)
         }
        })
    }

    static checkToken(token){
        return new Promise((resolve,reject)=>{
            try{
           const decodeToken = jwt.verify(token,process.env.JWT_KEY)
            console.log(decodeToken)
           resolve(decodeToken)
            }catch(err){
                reject(err)
            }
        })
    }
}

module.exports =  Authentication;