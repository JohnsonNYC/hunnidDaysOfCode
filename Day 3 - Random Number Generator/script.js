const count = document.querySelector(".count-number")
const button = document.querySelector(".generate");

button.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 100);
  count.innerHTML = number;
})