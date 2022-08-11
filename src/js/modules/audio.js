// Processing of the audio stream
(function () {
  const spectrumDefault = [
    15, 20, 30, 50, 30, 20, 15, 20, 30, 50, 30, 20, 15, 15, 20, 30, 50, 30, 20,
    15, 20, 30, 50, 30, 20, 15,
  ];
  let context, analyser, src, frequencyArray;
  let spectrum = document.querySelectorAll(".spectrum__elem");
  let listen = document.querySelector(".icon-play");
  let audioPlayer = document.querySelector(".audio-player");

  spectrum.forEach((el, index) => {
    el.style.height = `${spectrumDefault[index]}px`;
  });

  listen.addEventListener("click", audioplay);
  /* Event handler a button press 'PLAY' (audio player)  */
  function audioplay(event) {
    audioPlayer.classList.toggle("play-active");
    /* If audio player has the class 'Active' and its context is not empty */
    if (audioPlayer.classList.contains("play-active") === true && !context) {
      audioPlayer.play();
      event.target.src = "img/icon_svg/pause-btn.svg";
      compareAudio();
    } else if (audioPlayer.paused) {
      audioPlayer.play();
      event.target.src = "img/icon_svg/pause-btn.svg";
      loop();
    } else {
      audioPlayer.pause();
      event.target.src = "img/icon_svg/play-btn.svg";
    }

    audioPlayer.onended = () => {
      listen.src = "img/icon_svg/play-btn.svg";
      audioPlayer.classList.toggle("play-active");

      /* If the music track is over - after one second, set the default spectrum.  */
      setTimeout(() => {
        spectrum.forEach((el, index) => {
          el.style.height = `${spectrumDefault[index]}px`;
        });
      }, 500);
    };
  }

  function compareAudio() {
    /* Settings for processing sound received from an audio player. */
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audioPlayer);
    src.connect(analyser);
    analyser.connect(context.destination); // direction of sound to the speakers
    loop();
  }

  function loop() {
    // Audio track frequency processing and drawing (animation).
    if (!audioPlayer.paused) {
      window.requestAnimationFrame(loop);
    }
    frequencyArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencyArray);
    spectrum.forEach((el, index) => {
      el.style.height = `${frequencyArray[index] / 3}px`;
    });
    // console.log(frequencyArray);
  }
})();
