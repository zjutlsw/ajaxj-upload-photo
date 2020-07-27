const token=localStorage.getItem("token")
export default function upload(previewImg){
        return new Promise((resolve,reject)=>{
            const xhr=new XMLHttpRequest();
            const formData=new FormData();
            xhr.open("post",'/upload',true)
            formData.append("file",previewImg.file)
            xhr.onload=function(){
                resolve(xhr.response);
            }
            xhr.upload.onprogress=function(ev){
                previewImg.updateProgress(ev.loaded,ev.total);
        

            }
            xhr.setRequestHeader('Authorization',"Bearer " + token);
            xhr.send(formData);
        })
}