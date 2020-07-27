# ajaxj-upload-photo

该项目主要是通过koa和jwt做登录和上传图片到后台数据库的功能
主要使用了 jsonwebtoken生成token koa-jwt来做拦截器
关于鉴权
   后台需要设置一个私钥secret来生成token，
  首先使用jsonwebtoken在登录验证通过后生成token返回给前端，
  前端通过 localstorage.setItem保存到浏览器端，接下去每次提交需要提交token到头部
  koa-jwt的前端提交需要设置（ 'Authorization',"Bearer " + token)后台才会验证通过，
  koajwt 通过unless（{path:[/^\/login/]}）来 对登录的请求做额外处理，
  
  
 关于前端批量上传
  需要通过XMLHttpRequest结合FormData来实现文件上传功能，
  通过formdata.append函数添加参数或配置，
  通过监听xhr的upload.onprogress来实时监听上传进度
  
  
  当xhr提交的是json数据的时候 需要吧json转为json字符串以及设置头application/json
