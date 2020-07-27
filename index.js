const Koa=require("koa");
const Router=require("koa-router");
const Static=require("koa-static");
const KoaBody=require("koa-body");
const path=require("path");
const {initDB}=require("./db");
var jwt = require('koa-jwt');
const {secret}=require("./consts")

initDB();

const {loginRouter,photoRouter}=require("./routers")
const app=new Koa();
app.use(Static(path.resolve(__dirname,'./static')));;
app.use(function (ctx, next) {
    return next().catch((err) => {
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
          msg: err.originalError ?err.originalError.message : err.message
        };
      } else {
        throw err;
      }
    });
  });
app.use(jwt({secret }).unless({path:[/^\/login/]}))
app.use(KoaBody({
    multipart:true
}))
const router=new Router();
app.use(loginRouter.routes());
app.use(photoRouter.routes());
app.listen(8080)