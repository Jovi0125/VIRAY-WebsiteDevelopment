document.addEventListener("DOMContentLoaded", function () {

  
  const text = "WELCOME TO MY PORTFOLIO";
  const title = document.getElementById("mainTitle");

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 80);
    }
  }

  typeEffect();

});