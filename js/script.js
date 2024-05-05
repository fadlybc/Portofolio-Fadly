//mengubah arah tiap 5 detik

setInterval(function () {
  var images = document.querySelectorAll(".row .frame4 img");
  images.forEach(function (image) {
    var randomDirection = Math.random() < 0.5 ? 1 : -1;
    image.style.animationDirection =
      randomDirection === 1 ? "normal" : "reverse";
  });
}, 500);
