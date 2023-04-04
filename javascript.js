// Set the date we're counting down to
var countDownDate = new Date("Nov 20, 2023 20:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="cuenta" ><div>
    <div class=" txt-pink">${days}</div><div class="cuenta-regresiva"> días</div>
    </div>
    <div>
    <div class=" txt-pink">${hours}</div><div class="cuenta-regresiva"> horas</div>
    </div>
    <div>
    <div class=" txt-pink">${minutes}</div><div class="cuenta-regresiva"> min</div>
    </div>
    </div>
    </div>
    `;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// -------------------------------------------- animation
// animate-rigth (up)
let animateRigth = document.querySelectorAll(".animate-up");

function showRigth() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateRigth.length; i++) {
    let high = animateRigth[i].offsetTop;
    if (high - 660 < scrollTop) {
      animateRigth[i].style.opacity = 1;
      animateRigth[i].classList.add("appear-rigth");
    }
  }
}

window.addEventListener("scroll", showRigth);

// animate-right
let animateRight = document.querySelectorAll(".animate-right");

function showRight() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateRight.length; i++) {
    let high = animateRight[i].offsetTop;
    if (high - 500 < scrollTop) {
      animateRight[i].style.opacity = 1;
      animateRight[i].classList.add("appear-right");
    }
  }
}

window.addEventListener("scroll", showRight);

// animate-left
let animateLeft = document.querySelectorAll(".animate-left");

function showLeft() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateLeft.length; i++) {
    let high = animateLeft[i].offsetTop;
    if (high - 600 < scrollTop) {
      animateLeft[i].style.opacity = 1;
      animateLeft[i].classList.add("appear-left");
    }
  }
}

window.addEventListener("scroll", showLeft);

// Animate-down
let animateDown = document.querySelectorAll(".animate-down");

function showDown() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateDown.length; i++) {
    let high = animateDown[i].offsetTop;
    if (high - 600 < scrollTop) {
      animateDown[i].style.opacity = 1;
      animateDown[i].classList.add("appear-down");
    }
  }
}

window.addEventListener("scroll", showDown);

// Animate-image
let animateImage = document.querySelectorAll(".animate-image");

function showImage() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateImage.length; i++) {
    let high = animateImage[i].offsetTop;
    if (high - 120 < scrollTop) {
      animateImage[i].style.opacity = 1;
      animateImage[i].classList.add("appear-image");
    }
  }
}

window.addEventListener("scroll", showImage);

// Animate-up
let animateText = document.querySelectorAll(".animate-text");

function showText() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animateText.length; i++) {
    let high = animateText[i].offsetTop;
    if (high - 600 < scrollTop) {
      animateText[i].style.opacity = 1;
      animateText[i].classList.add("appear-text");
    }
  }
}

window.addEventListener("scroll", showText);

// -------------------------------AUDIO
const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});
