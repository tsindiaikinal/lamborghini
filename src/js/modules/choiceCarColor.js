// Module for choice car color
(function () {
  const cars = {
    graphiteWebp: "img/urus-graphite.webp",
    yellowWebp: "img/urus-yellow.webp",
    greenWebp: "img/urus-green.webp",
    orangeWebp: "img/urus-orange.webp",
    blueWebp: "img/urus-blue.webp",
    whiteWebp: "img/urus-white.webp",
    blackWebp: "img/urus-black.webp",
    graphite: "img/urus-graphite.png",
    yellow: "img/urus-yellow.png",
    green: "img/urus-green.png",
    orange: "img/urus-orange.png",
    blue: "img/urus-blue.png",
    white: "img/urus-white.png",
    black: "img/urus-black.png",
  };
  let place = document.querySelector(".interactive-view__place");
  let palette = document.querySelector(".palette");
  let viewImg = document.querySelector(".interactive-view__elem");
  let sourceImg = document.querySelector("source");
  let msg =
    '<h3 class="msg-warning">Sorry, this color is not currently available :(</h3>';

  palette.addEventListener("click", function (event) {
    let paint = event.target.closest(".paint").dataset.color;

    try {
      switch (paint) {
        case "graphite":
          viewImg.src = cars.graphite;
          sourceImg.srcset = cars.graphiteWebp;
          viewImg.onerror = () => printErrorMsg();
          checkHideContent();
          break;
        case "yellow":
          viewImg.src = cars.yellow;
          sourceImg.srcset = cars.yellowWebp;
          viewImg.onerror = () => printErrorMsg();
          checkHideContent();
          break;
        case "green":
          viewImg.src = cars.green;
          sourceImg.srcset = cars.greenWebp;
          viewImg.onerror = () => printErrorMsg();
          checkHideContent();
          break;
        case "orange":
          viewImg.src = cars.orange;
          sourceImg.srcset = cars.orangeWebp;
          viewImg.onerror = () => printErrorMsg();
          checkHideContent();
          break;
        case "blue":
          viewImg.src = cars.blue;
          sourceImg.srcset = cars.blueWebp;
          viewImg.onerror = () => printErrorMsg();
          checkHideContent();
          break;
        case "white":
          viewImg.src = cars.white;
          sourceImg.srcset = cars.whiteWebp;
          viewImg.onerror = () => printErrorMsg();
          checkHideContent();
          break;
        case "black":
          viewImg.src = cars.black;
          sourceImg.srcset = cars.blackWebp;
          viewImg.onerror = () => printErrorMsg();
          checkHideContent();
          break;
      }
    } catch (error) {
      console.log("This is error: " + error);
    }
  });
  function printErrorMsg() {
    place.insertAdjacentHTML("beforebegin", msg);
    place.style.display = "none";
  }
  function checkHideContent() {
    if (place.style.display === "none") {
      place.style.display = "inline-block";
      document.querySelector(".msg-warning").remove();
    }
  }
})();
