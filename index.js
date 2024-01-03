body = document.querySelector("body");

function changeBackgroundColor() {
    body.style.backgroundImage = "linear-gradient(to right, " +colorpicker.value+ ", "+ colorpicker1.value +")";
    document.querySelector("h4").textContent = body.style.backgroundImage ;
}
function init() { 
    document.getElementById("container").style.color = changeColor.value;
  }
  init();

changeBackgroundColor();

colorpicker.addEventListener("input",changeBackgroundColor);
colorpicker1.addEventListener("input",changeBackgroundColor);
changeColor.addEventListener("input",init);   