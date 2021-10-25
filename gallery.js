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
console.log(h);
shuffle();
function shuffle(){
  var square = document.getElementById("shuffle");
  x = random(0, w-200);
  y = random(0, h);
  square.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room1 = document.getElementById("room1");
  x = random(0, w-200);
  y = random(0, window.innerHeight);
  room1.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room2 = document.getElementById("room2");
  x = random(0, w-200);
  y = random(0, window.innerHeight);
  room2.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room3 = document.getElementById("room3");
  x = random(0, w-200);
  y = random(0, window.innerHeight);
  room3.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room4 = document.getElementById("room4");
  x = random(0, w-200);
  y = random(0, window.innerHeight);
  room4.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");

for (var i = 1; i <= 142; i += 1) {
  var position = document.getElementById("art"+i);
  x = random(0, w-200);
  y = random(0, h);
  s = random(150, 200);
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

function random(min, max) {
  return Math.random() * (max - min) + min;
}
// var img = document.createElement("img");
// img.src = "testimages/01.jpg";
// img.setAttribute("style", "width: 100%");
// var div = document.getElementById("x");
// document.getElementById("x").appendChild(img);
// div.setAttribute("style", "text-align:center");
