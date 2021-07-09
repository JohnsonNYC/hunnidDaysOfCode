const colorEl = document.querySelector(".hex-value");
const generate = document.querySelector(".generate");
const hexContainer = document.querySelector(".hex-container")


generate.addEventListener("click", () =>{
  let color = Math.random().toString(16).substring(2,8);
  colorEl.innerHTML = '#' + color;
  hexContainer.style.backgroundColor = colorEl.innerHTML;  
})