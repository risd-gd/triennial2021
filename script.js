document.addEventListener("DOMContentLoaded", function(event) { 
  let constrain;
  var intervalId = window.setInterval(function(){
    if (window.innerWidth < 1281) { 
      constrain = 3500 
    } else if (window.innerWidth < 1500) { 
      constrain = 8000
    } else if (window.innerWidth < 1900) {document.addEventListener("DOMContentLoaded", function(event) { 
  let constrain =2000;
  let mouseOverContainer = document.getElementById("ex1");
  let ex1Layer = document.getElementById("ex1-layer");

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / (constrain * 0.8);
    let calcY = (x - box.x - (box.width / 2)) / (constrain * 0.8);
    
    return "perspective(100px) "
      + "   rotateX("+ calcX*9 +"deg) "
      + "   rotateY("+ calcY*9 +"deg) ";
  };

  function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
  }

  mouseOverContainer.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    window.requestAnimationFrame(function(){
      transformElement(ex1Layer, position);
    });
  };

});

var x = 0 

setInterval(function changeClass(){ 
  x = x + 1 

  if (x == 0){
    document.getElementById('textchecker').style.fontFamily = 'hHalfFold'
    console.log("change1")
  }

  if (x == 1){
    document.getElementById('textchecker').style.fontFamily = 'quadFold'
    console.log("change2")
  }

  if (x == 2){
    document.getElementById('textchecker').style.fontFamily = 'triFold'
    console.log("change3")
  }

  if (x == 3){
    document.getElementById('textchecker').style.fontFamily = 'vHalfFold'
    console.log("change3")
  }

  if (x == 4){
    document.getElementById('textchecker').style.fontFamily = 'Checker'
    console.log("change3")
  }

  if (x>4){
    x = 0
  }

}, 500);




      constrain = 1200
    } else {
      constrain = 2000;
    };
    // console.log(constrain + 'and' + window.innerWidth);
  }, 1000);
  
  let mouseOverContainer = document.getElementById("ex1");
  let ex1Layer = document.getElementById("ex1-layer");

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / (constrain * 0.8);
    let calcY = (x - box.x - (box.width / 2)) / (constrain * 0.8);
    
    return "perspective(100px) "
      + "   rotateX("+ calcX*15 +"deg) "
      + "   rotateY("+ calcY*15 +"deg) ";
  };

  function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
  }

  mouseOverContainer.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    window.requestAnimationFrame(function(){
      transformElement(ex1Layer, position);
    });
  };

});

var x = 0 

setInterval(function changeClass(){ 
  x = x + 1 

  if (x == 0){
    document.getElementById('textchecker').style.fontFamily = 'hHalfFold'
    console.log("change1")
  }

  if (x == 1){
    document.getElementById('textchecker').style.fontFamily = 'quadFold'
    console.log("change2")
  }

  if (x == 2){
    document.getElementById('textchecker').style.fontFamily = 'triFold'
    console.log("change3")
  }

  if (x == 3){
    document.getElementById('textchecker').style.fontFamily = 'vHalfFold'
    console.log("change3")
  }

  if (x == 4){
    document.getElementById('textchecker').style.fontFamily = 'Checker'
    console.log("change3")
  }

  if (x>4){
    x = 0
  }

}, 500);



