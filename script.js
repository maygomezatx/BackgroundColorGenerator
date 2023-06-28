//Selecting elements and assigning variables
let css = document.querySelector("strong");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
//HTML element where gradient will be applied
let body = document.getElementById("gradient");


//The c() function is defined. This function is responsible for updating the background gradient and displaying the CSS code.
function c() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

  css.textContent = body.style.background + ";";
}

//call the c() function whenever the values of the color inputs change, triggering an update of the background gradient and the displayed CSS code.
color1.addEventListener("input", c);
color2.addEventListener("input", c);