export default class PreviewImg{
    constructor(file){
        this.file=file;
        this.element=this.createElement();
        this.setImg();
        
    }
    getFile(){
        return this.file
    }
    setImg(){
        const read=new FileReader();
        read.addEventListener("load",()=>{
            this.element.querySelector("img").setAttribute("src",read.result)
        })
        read.readAsDataURL(this.file)

    }
    createElement(){

      
        const div=document.createElement('div');
        div.classList.add("uploadPhotoItem");
        div.innerHTML=`<span class="myProgress">
            <span class="plan"></span>
            <span class="val">30%</span>
            </span>
            <img src="img/1.jpg" />
            <span class="pictureName">
            ${this.file.name}
            </span>`  ;
        document.querySelector(".wantUpload").appendChild(div);
        return div;
    
    }
    updateProgress(loaded,total){
        const percent=(loaded/total*100).toFixed(0);
        this.updateProgressView(percent);
        if(this.isDone(percent)){
            this.hideProgress();
        }

    }

    isDone(percent) {
        return percent >= 100;
    }

    hideProgress() {
        this.element.querySelector(".myProgress").style.display = 'none';
    }

    updateProgressView(percent) {
        this.element.querySelector(".myProgress").style.display = 'block';
        this.element.querySelector(".myProgress .val").innerText = percent + "%";
        this.element.querySelector(".myProgress .plan").style.width = percent + "%";
    }
}