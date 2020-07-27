const Router=require("koa-router");
const {photoController}=require("../controllers")
const router=new Router();
 
router.post("/upload",photoController.upload);
router.get("/getPhotos",photoController.getPhotos);
module.exports=router