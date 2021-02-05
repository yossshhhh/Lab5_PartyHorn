// main.js

var soundImg = document.getElementById("sound-image");
var airHornSound = document.getElementById("radio-air-horn");
var carHornSound = document.getElementById("radio-car-horn");
var partyHornSound = document.getElementById("radio-party-horn");
                                             

//update images based on currently selected sound
airHornSound.addEventListener("click", function() {
  soundImg.setArrribute("src", "./assets/media/images/air-horn.svg");
})

carHornSound.addEventListener("click", function() {
  soundImg.setAttribute("src", "./assets/media/images/car.svg");
})

partyHornSound.addEventListener("click", function() {
  soundImg.setAttribute("src", "./assets/media/images/party-horn.svg");
})


var volNum = document.getElementById("volume-number");
var volImg = document.getElementById("volume-image");
var button = document.getElementById("honk-button");

//update volume number
volNum.addEventListener("change", function() {  
  let vol = volNum.value;
  if(vol > 66) { //67-100
    volImg.src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  }
  else if(vol > 33) { //34-66
    volImg.src = "./assets/media/icons/volume-level-2.src";
    button.disabled = false;
  }
  else if(vol > 0) { //1-33
    volImg.src = "./assets/media/icons/volume-level-1.src";
    button.disabled = false;
  }
  else { //0
    volImg.src = "./assets/media/icons/volume-level-0-.src";
    button.disabled = true; 
  }
  sound.volume = vol/100; //set volume percent of 100
})

var volSlider = document.getElementById("volume-slider");

//update volume slider
volSlider.addEventListener("change", function() {
  let vol = volSlider.value;
  if(vol > 66) { //67-100
    volImg.src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  }
  else if(vol > 33) { //34-66
    volImg.src = "./assets/media/icons/volume-level-2.src";
    button.disabled = false;
  }
  else if(vol > 0) { //1-33
    volImg.src = "./assets/media/icons/volume-level-1.src";
    button.disabled = false;
  }
  else { //0
    volImg.src = "./assets/media/icons/volume-level-0-.src";
    button.disabled = true; 
  }
  sound.volume = vol/100; //set volume percent of 100
})

//update sound
var audioSelect = document.getElementById("audio-seclection");
var sound = document.getElementById("horn-sound");
audioSelect.addEventListener("change", toggleSound);

function toggleSound(evt) {
  let currSound = evt.target;
  if(currSound.id = "radio-air-horn") {
    sound = "./assets/media/audio/air-horn.mp3";
  }
  if(currSound.id = "radio-car-horn") {
    sound = "./assets/media/audio/radio-car-horn.mp3";
  }
  if(currSound.id = "radio-party-horn") {
    sound = "./assets/media/audio/radio-party-horn.mp3";
  }
}

var submit = document.getElementById("party-horn-form");
play.addEventListener("submit", playSound);

function playSound(evt) {
  evt.preventDefault();
  sound.play();
}
