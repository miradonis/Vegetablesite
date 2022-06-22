"use strict";



/*-------------------------SEARCH-----------------------------*/

document.getElementById("suche")
  .addEventListener("keypress", function(event) { 
  if (event.key == '\n') {
    document.getElementById("apple").click();
  }
});

/*----------------------LOGIN WINDOW--------------------------*/

document.getElementById("button1").addEventListener("click", function () {
  document.querySelector(".popupLogin").style.display = "flex";
});

document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".popupLogin").style.display = "none";
});

/*--------------------REGISTER WINDOW---------------------------*/

document.getElementById("button2").addEventListener("click", function () {
  document.querySelector(".popupRegister").style.display = "flex";
});

document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".popupRegister").style.display = "none";
});

/*------------------------SLIDER-------------------------------*/
var simpleSlides = function () {
  var i;
  var slides = document.querySelectorAll(".slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].setAttribute("style", "display:none");
  }
  count++;
  if (count > slides.length) {
    count = 1;
  }
  slides[count - 1].setAttribute("style", "display:block");
  setTimeout(simpleSlides, 3600);
};

var count = 0;
simpleSlides();




/*--------------------------START ASIDE MIT JQUERY---------------------------------*/

$(document).ready(function () {

  function pulsate() {
    $("#startAside").
    animate({opacity: 0.2}, 'linear').
    animate({opacity: 1}, 1000, 'linear', pulsate);
  };
  pulsate();
  


});


/*----------------------------------------------------------------------*/