
const loginStyle=document.querySelector(".loginStyle");
const usernameEle=document.querySelector("[name='username']");
const pwdEle=document.querySelector("[name='pwd']");



loginStyle.addEventListener("click",(e)=>{
    e.preventDefault();
      const xhr=new XMLHttpRequest();


      xhr.open("post",'/login');
      xhr.onload=(e)=>{
          const res=JSON.parse(xhr.response);
          if(res.status=='1'){
              localStorage.setItem("token",res.token);
              location.href="/photo.html";
          }else{
              alert(res.msg)
          }

      }
      const data={
          username:usernameEle.value,
          password:pwdEle.value
      };
      xhr.setRequestHeader("content-type",'application/json');
      xhr.send(JSON.stringify(data));
    
})
 