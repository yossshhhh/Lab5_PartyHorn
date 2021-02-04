// main.js

let volImg = document.getElementById("volume-image");
let sound = document.getElementById("horn-sound");

function updateImage(vol) {
  vol = vol % 100; //adjust in case input is greater than 100
  sound.volume = vol/100; //set volume percent of 100
  
  if(vol > 66) { //67-100
    volImg.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if(vol > 33) { //34-66
    volImg.src = "./assets/media/icons/volume-level-2.src";
  }
  else if(vol > 0) { //1-33
    volImg.src = "./assets/media/icons/volume-level-1.src";
  }
  else { //0
    volImg.src = "./assets/media/icons/volume-level-0-.src";
  }
}

  
  
    
  
