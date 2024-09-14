let input = document.querySelector("input")
let button = document.querySelector("button")
let result = document.querySelector("h3")

button.addEventListener(`click`,function(){
    //  console.log(input.value);
    if (input.value>= 18) {
      result.innerHTML="Biya kor"
      result.style.color="green"
      
    }
    else{
      result.innerHTML="Biyar boios hoi nai"
       result.style.color="red"
        result.style.background="teal"
         result.style.fontSize="50px"
    }
})

