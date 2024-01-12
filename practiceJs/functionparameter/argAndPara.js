// //.                parameters
// function greetUser(greeting, name) { 
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.        arguments
// greetUser("Howdy", "James")


// function add(num1, num2) {
//     return num1 + num2
// }
// add(3, 4)

// // arguments are created outside of the function 
// // parrameter is created inside of the function

// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr){
    return arr[0]
}


// Call it with an array as an argument to verify that it works
let a= [1,2,3,4,5,6,7]
console.log(getFirst(a))
