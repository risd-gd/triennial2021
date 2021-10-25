w = window.innerWidth;
h = window.innerHeight;
var x, y, s;

shuffle();
function shuffle(){
  var square = document.getElementById("shuffle");
  x = random(0, w-400);
  y = random(0, h*10);
  square.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
for (var i = 1; i <= 48; i += 1) {
  var position = document.getElementById("art"+i);
  x = random(0, w-400);
  y = random(0, h*9);
  s = random(100, 400);
  position.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;" + "width:" + s + "px;");
}
var button = document.getElementById("shuffle");
}

$(document).ready(function () {
  $("p").each(function (i) {
    $(this).addClass("info");
  });
});


function random(min, max) {
  return Math.random() * (max - min) + min;
}

