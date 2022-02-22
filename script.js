let equal_pressed = 0;
//Refer all buttons excluding AC and DEL
let button_input = document.querySelector(".input-button");
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equal_pressed = 1;
    console.log(equal_pressed)
    
})

