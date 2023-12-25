// let randomNumber = Math.random() *6
// console.log(randomNumber)

/* 

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

*/

// let randomNumber = Math.random()

// console.log(randomNumber)


/* 

In which range will our randomNumber be now?

From:
To:

*/

// let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)

/* 

What does Math.floor() do to positive numbers?

Your answer:  it removes the decimals

*/

// let randomNumber = Math.floor( Math.random() * 6 )
// console.log(randomNumber)

/* 

Write down all the possible values randomNumber can hold now!

 0 1 2 3 4 5 

*/

// Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor( Math.random() * 6 ) + 1
// console.log(randomNumber)

// Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice(){
    let randomNumber = Math.floor(Math.random()*6)+1
    return randomNumber
}
let a=rollDice()
console.log(a)