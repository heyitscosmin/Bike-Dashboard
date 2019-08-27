var countdown = document.getElementById("countdown");

var countItDown = function() {
  var currentTime = parseFloat(countdown.textContent);
  if (currentTime < 220) {
    countdown.textContent = currentTime + 1;
  } else {
    countdown.textContent = 0;
  }

};

var timer = window.setInterval(countItDown, 100); //ms

$("#main")
  .bind("touchstart", function() {
    $(this).addClass("active");
  })
  .bind("touchend", function() {
    $(this).removeClass("active");
  });
var mode = "home";

$('#main').click(function() {
  if (mode == "home") {
    TweenMax.to($('#home'), 1, {x: -360 })
    TweenMax.fromTo($('#engcheck'), 1, { x: 360, autoAlpha: 1}, { x: 0 })
    mode = "engcheck";
  } else if (mode == "engcheck") {
    TweenMax.to($('#engcheck'), 1, { x: -360 })
    TweenMax.fromTo($('#tempcheck'), 1, { x: 360, autoAlpha: 1}, { x: 0 })
    mode = "tempcheck";
    } else if (mode == "tempcheck") {
    TweenMax.to($('#home'), 1.2, { x: 0 })
    TweenMax.fromTo($('#tempcheck'), 1.2, {x: 0, autoAlpha: 1}, { x: 360 })
    mode = "home";
  }
})
