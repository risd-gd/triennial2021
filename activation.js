w = window.innerWidth;
var h = document.getElementById('statement').clientHeight;
var x, y, s;

// for (var i = 1; i <= 48; i += 1) {
//   var span = document.createElement("span");
//   document.getElementById("artwork").appendChild(span);
//   var art = document.createElement("img");
//   art.src = "testimages/" + i + ".jpg";
//   span.appendChild(art);
//   var info = document.createElement("p");
//   span.appendChild(info);
//   x = random(0, w);
//   y = random(0, h);
//   s = random(50, 300);
//   span.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
//   art.setAttribute("style", "width:" + s + "px;");
// }
//mediaquery
shuffle();
function shuffle(){
  var square = document.getElementById("shuffle");
  x = random(0, w-200);
  y = random(0, window.innerHeight);
  square.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");

for (var i = 65; i <= 102; i += 1) {
  var position = document.getElementById("art"+i);
  x = random(50, 100);
  y = random(50, 60);
  s = random(200, 500);
  position.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;" + "width:" + s + "px;");
}
for (var i = 153; i <= 156; i += 1) {
  var position = document.getElementById("art"+i);
  x = random(50, 100);
  y = random(50, 60);
  s = random(200, 500);
  position.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;" + "width:" + s + "px;");
}
}

$(document).ready(function () {
  $("p").each(function (i) {
    $(this).addClass("info");
  });
});
// $(document).ready(function () {
//   $("p").each(function (i) {
//     $(this).addClass("text" + (i + 1));
//   });
// });

// text1 = document.getElementsByClassName("text1");
// for(var i=0;i<text1.length;i++)
// {
//   text1[i].innerHTML = 'Testing here';
// }
jQuery(document.links) .filter(function() { return this.hostname != window.location.hostname; }) .attr('target', '_blank');
function random(min, max) {
  return Math.random() * (max - min) + min;
}
// var img = document.createElement("img");
// img.src = "testimages/01.jpg";
// img.setAttribute("style", "width: 100%");
// var div = document.getElementById("x");
// document.getElementById("x").appendChild(img);
// div.setAttribute("style", "text-align:center");
