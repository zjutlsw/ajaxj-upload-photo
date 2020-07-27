const Router=require("koa-router");
const router=new Router();
const secret='dfdfdrqe1fddfda';
const jwt = require('jsonwebtoken');
const {loginController}=require("../controllers")
router.post("/login",loginController.login)
module.exports=router