const {getDB} = require("../db");
module.exports={
    async findByUsernameAndPassword(username,password){
         const sql='SELECT * FROM users WHERE username=? AND password=?';
         const [rows]=await getDB().execute(sql,[username,password]);
         return rows;
    }

}