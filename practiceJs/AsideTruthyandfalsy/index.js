const credits = 0

if ("yolo") {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}

// truthy
// falsy

// a sring is a trthy value 
// and a null string is falsy value

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN
// all of these are false value

let currentViewers = null

currentViewers = ["jane", "nick"]

currentViewers = null

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}

let currentviewers = ["jane"]

console.log(currentviewers[5])

let trueOrFalse = Boolean(-0)
console.log(trueOrFalse)

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) // false