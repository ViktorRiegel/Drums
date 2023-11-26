let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    checkChar(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  checkChar(event.key);

  buttonAnimation(event.key);
});

function checkChar(key) {
  switch (key) {
    case "w":
      let audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;

    case "a":
      let audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;

    case "s":
      let audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;

    case "d":
      let audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;

    case "j":
      let audioJ = new Audio("sounds/crash.mp3");
      audioJ.play();
      break;

    case "k":
      let audioK = new Audio("sounds/kick-bass.mp3");
      audioK.play();
      break;
    case "l":
      let audioL = new Audio("sounds/snare.mp3");
      audioL.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButt = document.querySelector("." + currentKey);

  activeButt.classList.add("pressed");

  setTimeout(function () {
    activeButt.classList.remove("pressed");
  }, 100);
}
