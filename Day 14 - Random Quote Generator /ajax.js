const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
btn.addEventListener("click", getQuotes);

function getQuotes(e){
  e.preventDefault(); 

  if(number.value.lenth ==0){
    return alert("Please enter a number");
  }else{

  }
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://type.fit/api/quotes",true);

  xhttp.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
      const quotes = JSON.parse(this.responseText);
      let output = "";

      for(let i = 0; i < number.value; i++){
        output += `
          <hr>
            <ul>
              <li>${quotes[i].text} </li>
              <li>${quotes[i].author} </li>
            </ul>
          `
      }
      document.querySelector(".quotes").innerHTML = output;
    }
  }
  xhttp.send();
}