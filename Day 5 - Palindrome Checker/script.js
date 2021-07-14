const check = document.querySelector(".btn")
const result = document.querySelector(".result")

// TODO: What happens on click of 'check'
  //* create a function to check if a string is a palindrome 
  //* if it is, take that word in all caps and append 'is a plaindrome'
  //* if it is not, take hat word in all caps and append ' is not a palindrome'

check.addEventListener('click', () => {
  result.innerHTML = isPalindrome();
})

function isPalindrome(){
  let result = document.querySelector(".input-text").value;
  let reverseResult = result.split("").reverse().join("");
  if(result.toUpperCase() === reverseResult.toUpperCase()){
    return result.toUpperCase() + ' is a Palindrome'
  }else{
    return result.toUpperCase() + ' is NOT a Palindrome'
  }
}