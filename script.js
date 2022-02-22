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
    let inp_val = input.value;
    try {
        //Evaluate user's input
        let solution = eval(inp_val);
        //True for natural numbers
        //False for decimals
        if (Number.isInteger(solution)) {
            input.value = solution;
        }else{
            input.value = solution.toFixed(2);
        }
    }catch (err) {
        //If user has entered invalid input
        alert("Invalid Input");
    }
});

