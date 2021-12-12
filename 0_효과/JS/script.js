var audio = document.getElementById('audio_play'); 

function play() { 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
}

  
  