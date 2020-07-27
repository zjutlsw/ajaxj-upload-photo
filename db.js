const mysql =require("mysql2/promise");
let connection;
module.exports={
    async initDB(){
        connection=await mysql.createConnection({
            host:"localhost",
            user:'root',
            password:'root',
            database:'kkb'
        })
        connection.on("error",function(err){
            console.log('11111',err);
        })
    },
    getDB(){
        return connection;
    }
}