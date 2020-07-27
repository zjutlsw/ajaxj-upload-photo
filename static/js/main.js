import PreviewImg from './previewImg.js';
import upload from './upload.js'


const imgFiled=document.querySelector(".imgFile");
const imgFileAdd=document.querySelector(".imgFile-add");
const showContainer=document.querySelector(".showContainer");
const loadContainer=document.querySelector(".loadContainer");
const uploadBtn=document.querySelector(".uploadBtn");
const token=localStorage.getItem("token")
let uploadList=[];


initPhotos();
uploadBtn.addEventListener("click",async()=>{
    
    for(let previewImg of uploadList){
      await  upload(previewImg)
    }
    
    completeUpload();
 

})
imgFiled.addEventListener("change",e=>{
    renderPreviewElement(e.target.files);

})
imgFileAdd.addEventListener("change",e=>{
    renderPreviewElement(e.target.files);

})

function initPhotos() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", '/getPhotos');
    xhr.onload = () => {
        const photoList = JSON.parse(xhr.response);
        const frag = document.createDocumentFragment();
        photoList.forEach(photo => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("photoItem");
            itemElement.innerHTML = `<img src="${photo.imgUrl}" />
                                    <span>
                                    ${photo.name}
                                    </span>`;
            frag.appendChild(itemElement);
        });
        document.querySelector(".photoContainer").innerHTML='';
        document.querySelector(".photoContainer").append(frag);
    };
 
    xhr.setRequestHeader('Authorization',"Bearer " + token);
    xhr.send();
}

function completeUpload() {
    reset();
}

function reset() {
    uploadList = [];
    document.querySelector(".wantUpload").innerHTML = ``;
    document.querySelector(".masking").style.display = "none";
    hideLoadContainer();
    initPhotos();
}

function renderPreviewElement(files) {
    [...files].forEach(file => {
        let previewImg = new PreviewImg(file);
        uploadList.push(previewImg);
    });

    showLoadContainer();
}
function showLoadContainer() {
    showContainer.style.display = 'none';
    loadContainer.style.display = 'block';
}


function hideLoadContainer() {
    showContainer.style.display = 'block';
    loadContainer.style.display = 'none';
}
