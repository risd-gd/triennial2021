w = window.innerWidth;
h = window.innerHeight;
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
