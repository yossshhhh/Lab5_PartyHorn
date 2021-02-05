// main.js

var volImg = document.getElementById("volume-image");
var sound = document.getElementById("horn-sound");
var soundImg = document.getElementById("sound-image");

//update images based on currently selected sound
document.getElementById("radio-air-horn").addEventListener("click", function() {
  soundImg.setArrribute("src", "./assets/media/images/air-horn.svg");
})

document.getElementById("radio-car-horn").addEventListener("click", function() {
  soundImg.setAttribute("src", "./assets/media/images/car.svg");
})

document.getElementById("radio-party-horn").addEventListener("click", function() {
  soundImg.setAttribute("src", "./assets/media/images/party-horn.svg");
})


function updateImageAndVol(vol) {
  if(vol < 0) {
    vol = 0;
  }
  if(vol > 100) {
    vol = 100;
  }
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

var volNum = document.getElementById("volume-number");
var volSlider = document.getElementById("volume-slider");

function updateSlider(evt) { //update volume and slider based on input
  let vol = evt.target.value;
  if (vol < 0) {
    vol = 0;
  }
  else if (vol > 100)
    vol = 100; //adjust in case greater than 100
  }
  volNum.value = vol;
  volSlider = vol;
  updateImageAndVol(vol);
}


  
  
  
