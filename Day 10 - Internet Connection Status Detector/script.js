const image = document.getElementById("image");
const display = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor(){
  // * add a class attribute to main called online which is defined in css to have a blue background
  bgColor.classList.add("online");
}

// ! Connection Testing
async function connectionDetails(){
  try{ 
    // * Fetch an api to get a status of 200 and return a boolean 
    const fetchResult = await fetch("https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k");
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  }catch(error){ 
    // * If an error exists, display that to the DOM;
    display.textContent = "Looks like your internet is down!"
  }
}

// ! Monitoring Connection Frequency 
// * Check every 5 seconds if the internet connection is still established 
setInterval(async() => {
  const result = await connectionDetails();
  if(result){
    display.textContent = "You are online, connection looks good!"
  }
}, 5000)

// ! Check Connection when page loads
window.addEventListener("load", async(event) =>{
  if(connectionDetails()){
    display.textContent= "You are Online";
  }else{
    display.textContent = "You are Offline"
  }
})