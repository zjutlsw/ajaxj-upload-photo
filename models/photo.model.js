const {getDB} = require("../db");
module.exports={
    async add(data){
        const {fileName,filePath,userId}=data;
      
        const currentTime=Date.now();
        const sql='INSERT INTO photos (`name`,`imgUrl`,`create_time`,`userId`) VALUES (?,?,?,?)';
        const [rows]=await getDB().execute(sql,[fileName,filePath,currentTime,userId]);
         return rows;
    },
    async findAll(userId){
        const sql='SELECT * FROM photos WHERE userId=? ORDER BY create_time DESC';
        const [rows]=await getDB().execute(sql,[userId]);
        return rows;
    }
}