const {loginModel}=require("../models");
const {secret}=require("../consts");
const jwt=require("jsonwebtoken");
 

module.exports={
    async findByUsernameAndPassword(username,password){
        const [result]=await loginModel.findByUsernameAndPassword(username,password);
         if(result){
             const token=jwt.sign({userId:result.id},secret);
            return {
                status:1,
                msg:'登录成功',
                token
            }
         }else{
           
             return {
                 status:0,
                 msg:'用户名或密码错误'
             }
         }
        

    }
}