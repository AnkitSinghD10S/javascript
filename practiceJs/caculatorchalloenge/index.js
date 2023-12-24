let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let total =document.getElementById("sum-el");
let orignal = total.innerText;
function add(){
    total.innerText=orignal;
    let sum=num1+num2;
    total.innerText+=sum;
}

function subtract(){
    total.innerText=orignal;
    let sub=num1-num2;
    total.innerText+=sub;
}

function divide(){
    total.innerText=orignal;
    let div=num1/num2;
    total.innerText+=div;
}

function multiply(){
    total.innerText=orignal;
    let mul=num1*num2;
    total.innerText+=mul;
}
