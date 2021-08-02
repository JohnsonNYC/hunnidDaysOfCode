const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

// TODO: Use the Geolocation getCurrentPosition() API

btn.addEventListener("click",()=>{
  navigator.geolocation.getCurrentPosition(showPosition);
})

function showPosition(position){
  userLocation.innerHTML=`
    Latitude: ${position.coords.latitude} <br>
    Longitude: ${position.coords.longitude}
  `
}

// !Notes
// function success(pos) {
//   var crd = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }
// navigator.geolocation.getCurrentPosition(success, error);
