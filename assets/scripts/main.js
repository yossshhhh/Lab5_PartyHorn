// main.js                                       

//update images based on currently selected sound
document.getElementById("radio-air-horn").addEventListener("click", function() {
  document.getElementById("sound-image").setAttribute("src", "./assets/media/images/air-horn.svg");
})

document.getElementById("radio-car-horn").addEventListener("click", function() {
  document.getElementById("sound-image").setAttribute("src", "./assets/media/images/car.svg");
})

document.getElementById("radio-party-horn).addEventListener("click", function() {
  document.getElementById("sound-image").setAttribute("src", "./assets/media/images/party-horn.svg");
})

//update volume number
document.getElementById("volume-number").addEventListener("change", function() {  
  let vol = document.getElementById("volume-number").value;
  document.getElementById("volume-slider").value = vol;
  if(vol > 66) { //67-100
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    document.getElementById("honk-button").disabled = false;
  }
  else if(vol > 33) { //34-66
    document.getElementById("honk-button").disabled = false;
  }
  else if(vol > 0) { //1-33
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.src";
    document.getElementById("honk-button").disabled = false;
  }
  else { //0
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0-.src";
    document.getElementById("honk-button").disabled = true; 
  }
  document.getElementById("horn-sound").volume = vol/100; //set volume percent of 100
})

//update volume slider
document.getElementById("volume-slider").addEventListener("change", function() {
  let vol = document.getElementById("volume-slider").value;
  document.getElementById("volume-number").value = vol;
  if(vol > 66) { //67-100
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    document.getElementById("honk-button").disabled = false;
  }
  else if(vol > 33) { //34-66
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.src";
    document.getElementById("honk-button").disabled = false;
  }
  else if(vol > 0) { //1-33
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.src";
    document.getElementById("honk-button").disabled = false;
  }
  else { //0
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0-.src";
    document.getElementById("honk-button").disabled = true; 
  }
  document.getElementById("horn-sound").volume = vol/100; //set volume percent of 100
})

//update sound
document.getElementById("audio-seclection").addEventListener("change", toggleSound);

function toggleSound(evt) {
  let currSound = evt.target;
  if(currSound.id = "radio-air-horn") {
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
  }
  if(currSound.id = "radio-car-horn") {
    document.getElementById("horn-sound").src = "./assets/media/audio/radio-car-horn.mp3";
  }
  if(currSound.id = "radio-party-horn") {
    document.getElementById("horn-sound").src = "./assets/media/audio/radio-party-horn.mp3";
  }
}

document.getElementById("honk-button").addEventListener("click", function(evt) {
  evt.preventDefault();
  document.getElementById("horn-sound").play();
}
  
