document.addEventListener("DOMContentLoaded", function(event) { 
  let constrain =3500;
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



