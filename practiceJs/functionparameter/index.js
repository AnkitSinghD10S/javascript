// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greets) {
//     welcomeEl.textContent =greets +  ", Per Harald Borgen 👋"    
// }

// greetUser("hody")


// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greets) {
//     welcomeEl.textContent = `${greets}, Per Harald Borgen 👋`
// }
// let greeting="hello"
// greetUser(greeting)

const welcomeEl = document.getElementById("welcome-el")

// Add the ability to choose the emoji as well!

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy", "James", "🔥")