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
  x = random(100, w-400);
  y = random(0, h);
  square.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room1 = document.getElementById("room1");
  
  x = random(100, w-400);
  y = random(0, window.innerHeight);
  room1.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room2 = document.getElementById("room2");
  
  x = random(100, w-400);
  y = random(0, window.innerHeight);
  room2.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room3 = document.getElementById("room3");

  x = random(100, w-400);
  y = random(0, window.innerHeight);
  room3.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");
  var room4 = document.getElementById("room4");
  
  x = random(100, w-400);
  y = random(0, window.innerHeight);
  room4.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;");

for (var i = 1; i <= 157; i += 1) {
  var position = document.getElementById("art"+i);
  x = random(100, w-400);
  y = random(0, h-200);
  s = random(170, 200);
  position.setAttribute("style", "left:" + x + "px; " + "top:" + y + "px;" + "width:" + s + "px;");
}
}
for (var i = 1; i <= 36; i += 1) {
  var retrospection = document.getElementById("art"+i);
  retrospection.classList.add("retrospection")
}
for (var i = 37; i <= 64; i += 1) {
  var speculation = document.getElementById("art"+i);
  speculation.classList.add("speculation")
}
for (var i = 65; i <= 102; i += 1) {
  var activation = document.getElementById("art"+i);
  activation.classList.add("activation")
}
for (var i = 103; i <= 142; i += 1) {
  var connection = document.getElementById("art"+i);
  connection.classList.add("connection")
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

const mobile = document.getElementById('statement');
const artwork = document.getElementById("artwork")

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
document.body.addEventListener('touchstart', e => {
  artwork.setAttribute("style", "display: none;")
});
document.body.addEventListener('touchend', e => {
  artwork.setAttribute("style", "display: inline-block;")
});

// $(document.body).on('touchmove', onScroll); // for mobile
// $(window).on('scroll', onScroll); 

// // callback
// function onScroll(){ 
//     if( $(window).scrollTop() + window.innerHeight >= document.body.scrollHeight ) { 
//       artwork.setAttribute("style", "display: none;")
//     }else{
//       artwork.setAttribute("style", "display: inline-block;")
//     }
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
