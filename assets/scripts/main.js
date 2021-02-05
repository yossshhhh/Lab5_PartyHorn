// main.js

var soundImg = document.getElementById("sound-image");
var airHornSound = document.getElementById("radio-air-horn");
var carHornSound = document.getElementById("radio-car-horn");
var partyHornSound = document.getElementById("radio-party-horn");
                                             

//update images based on currently selected sound
airHornSound.addEventListener("click", function() {
  soundImg.src = "./assets/media/images/air-horn.svg";
})

carHornSound.addEventListener("click", function() {
  soundImg.src = "./assets/media/images/car.svg";
})

partyHornSound.addEventListener("click", function() {
  soundImg.src = "./assets/media/images/party-horn.svg";
})


var volNum = document.getElementById("volume-number");
var volImg = document.getElementById("volume-image");
var button = document.getElementById("honk-btn");
var volSlider = document.getElementById("volume-slider");
var sound = document.getElementById("horn-sound");

//update volume number
volNum.addEventListener("change", function() {  
  let vol = volNum.value;
  volSlider.value = vol;
  if(vol > 66) { //67-100
    volImg.src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  }
  else if(vol > 33) { //34-66
    volImg.src = "./assets/media/icons/volume-level-2.svg";
    button.disabled = false;
  }
  else if(vol > 0) { //1-33
    volImg.src = "./assets/media/icons/volume-level-1.svg";
    button.disabled = false;
  }
  else { //0
    volImg.src = "./assets/media/icons/volume-level-0-.svg";
    button.disabled = true; 
  }
  sound.volume = vol/100; //set volume percent of 100
})

//update volume slider
volSlider.addEventListener("change", function() {
  let vol = volSlider.value;
  volNum.value = vol;
  if(vol > 66) { //67-100
    volImg.src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  }
  else if(vol > 33) { //34-66
    volImg.src = "./assets/media/icons/volume-level-2.svg";
    button.disabled = false;
  }
  else if(vol > 0) { //1-33
    volImg.src = "./assets/media/icons/volume-level-1.svg";
    button.disabled = false;
  }
  else { //0
    volImg.src = "./assets/media/icons/volume-level-0-.svg";
    button.disabled = true; 
  }
  sound.volume = vol/100; //set volume percent of 100
})


button.addEventListener("click", function(evt) {
  evt.preventDefault();
  
  if(airHornSound.checked) {
    sound.src = "./assets/media/audio/air-horn.mp3";
    sound.play();
  }
  else if(carHornSound.checked) {
    sound.src = "./assets/media/audio/air-horn.mp3";
    sound.play();
  }
  else if(partyHornSound.checked) {
    sound.src = "./assets/media/audio/air-horn.mp3";
    sound.play();
  } 
})
