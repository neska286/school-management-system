const bcrypt = require('bcrypt');

class EncryptPass{
    static CreateCipherPass(plainPass){
      return new Promise((resolve,reject)=>{
        bcrypt.hash(plainPass,10).then((hashPass)=>{
          resolve(hashPass);
        }).catch(err=>{
          reject(err);
        })
      })
      
    }

    static ComparePassword(EncryptPass,PlainPass){
      return new Promise((resolve,reject)=>{
        bcrypt.compare(PlainPass,EncryptPass).then((result)=>{
          if (!result)
          return reject(false)
          else
          return resolve(true)
        }).catch((err)=>{
          return reject(err)
        })
      })

    }
}
module.exports = EncryptPass;