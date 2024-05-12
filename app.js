let progress =document.querySelector("#progress");
let song=document.querySelector("#song");
let ctrIcons =document.querySelector("#ctrlicon");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
ctrIcons.addEventListener("click",()=>{
     if(ctrIcons.classList.contains("fa-pause")){
        song.pause();
        ctrIcons.classList.remove("fa-pause");
        ctrIcons.classList.add("fa-play");
     }
     else{
        song.play();
        ctrIcons.classList.add("fa-pause");
        ctrIcons.classList.remove("fa-play");
     }
});
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrIcons.classList.add("fa-pause");
    ctrIcons.classList.remove("fa-play");
}