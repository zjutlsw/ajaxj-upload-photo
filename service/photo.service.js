const fs=require("fs");
const path=require("path");
const {photoModel}=require("../models");
module.exports={
    async upload(file,userId){
        const fileName=file.name
        const filePath='upload/'+Date.now()+fileName;
        const readStream=fs.createReadStream(file.path);
        
        const writeStream=fs.createWriteStream(path.resolve(__dirname,'../static/',filePath))
        readStream.pipe(writeStream);
        const result=await photoModel.add({fileName,filePath,userId});
        return result;

    },
    async getPhotos(userId){
        const result=await photoModel.findAll(userId);
        return result;
    }
}