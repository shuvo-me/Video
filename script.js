const btn = document.querySelector(".btn");
const switchBtn = document.querySelector(".switch");
const videoEl = document.querySelector(".video-container");
videoEl.pause();

btn.addEventListener("click", function () {
  switchBtn.classList.toggle("slide");

  if (switchBtn.classList.contains("slide")) {
    videoEl.play();
  } else {
    videoEl.pause();
  }
});
