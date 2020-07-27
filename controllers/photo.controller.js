const {photoService}=require("../service")
module.exports={
    async upload(ctx){
        const userId=ctx.state.user.userId;
        const {file}=ctx.request.files
        const result=await photoService.upload(file,userId);
        if(result.affectedRows>0){
            ctx.body={
                status:1,
                msg:'上传成功'
            }
        }else{
            ctx.body={
                status:0,
                msg:'上传失败'
            }
        }

    },
    async getPhotos(ctx){
       const userId=ctx.state.user.userId;
        const result=await photoService.getPhotos(userId);
        ctx.body=result;
    }
}