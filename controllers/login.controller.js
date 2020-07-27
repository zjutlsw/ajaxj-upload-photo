const {loginService}=require("../service")
module.exports={
    async login(ctx){
        const {username,password}=ctx.request.body
       
        if(username==''||password==""){
            ctx.body={
                status:0,
                msg:'用户名或密码错误'
            }
            return;
        }
        const result=await loginService.findByUsernameAndPassword(username,password);
        
        ctx.body=result
    
    },
   
}