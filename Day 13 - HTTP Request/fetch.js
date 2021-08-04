const button = document.getElementById("btn");
const user = document.getElementById("users");

button.addEventListener("click", getUsers);

function getUsers(e){
  e.preventDefault();
  let state = [];
  fetch("users.json")
    .then(resp => resp.json())
    .then(users => {
      let output='';
      users.forEach(user => {
        output += `
        <hr>
        <ul>
          <li> ID: ${user.id} </li>
          <li> Name: ${user.name} </li>
          <li> Age: ${user.age} </li>
          <li> Email: ${user.email} </li>
        </ul>
        `
      })
      user.innerHTML = output;
    })
}