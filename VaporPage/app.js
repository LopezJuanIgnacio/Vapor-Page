var song = new Audio;
let muted = false;
let btmMute = document.querySelector("#mute")
song.pause()
song.currentTime = 0;
song.src = "macintosh-plus-420-reupload.mp3"
function mute(){
    if(muted == true){
        console.log("desmuteado")
        muted = false;
        btmMute.innerHTML = '<i class="fas fa-volume-up float-right mute" onclick="mute()" id="mute"></i>'
        song.volume = 1;
    }else{
        console.log("muteado")
        muted = true;
        btmMute.innerHTML = '<i class="fas fa-volume-mute float-right mute" onclick="mute()" id="mute"></i>'
        song.volume = 0;
    }
}
function play(){
    console.log("play")
    song.play()
}
song.addEventListener('ended', ()=>{
    song.pause()
    song.currentTime = 0;
    song.play()
})
mute()
mute()