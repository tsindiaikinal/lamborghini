// Video Player Event Listeners
(function () {
  let watch = document.querySelector(".watch-btn");
  let videoplayer = document.querySelector(".video__player");

  watch.addEventListener("click", () => {
    videoplayer.play();
    watch.style.visibility = "hidden";
    videoplayer.controls = true;
  });
  
  videoplayer.onplay = () => (watch.style.visibility = "hidden");
  videoplayer.onpause = () => (watch.style.visibility = "visible");
})();
