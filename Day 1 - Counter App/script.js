const count = document.querySelector(".count");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
  if(e.target.classList.contains('add')){
    count.innerHTML++
  }
  if(e.target.classList.contains('reset')){
    count.innerHTML = 0; 
  }
  if(e.target.classList.contains('subtract')){
    count.innerHTML--
  }
  setColor();
})

function setColor(){
  if(count.innerHTML < 0){
    count.style.color = "red";
  }else if(count.innerHTML > 0){
    count.style.color = "yellow";
  }else{
    count.style.color = "white";
  }


}
// const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const subtract = document.querySelector('.subtract');
// const reset = document.querySelector('.reset');
// const buttons = document.querySelector('.buttons')
// buttons.addEventListener("click", (e) => {
//   if(e.target.classList.contains("add")){
//     count.innerHTML++;
//   }
//   if(e.target.classList.contains("subtract")){
//     count.innerHTML--;
//   }
//   if(e.target.classList.contains("reset")){
//     count.innerHTML=0;
//   }
//   setColor();
// })
// // Created Event Delegation as shown above 
// // add.addEventListener("click", () => {
// //   count.innerHTML++; 
// // })

// // subtract.addEventListener("click", () => {
// //   count.innerHTML--;
// // })

// // reset.addEventListener("click", ()=>{
// //   count.innerHTML = 0;
// // })

// function setColor(){
//   if(count.innerHTML < 0 ){
//     count.style.color = "red";
//   }else if(count.innerHTML > 0){
//     count.style.color = "yellow";
//   }else{
//     count.style.color = "white";
//   }
// }