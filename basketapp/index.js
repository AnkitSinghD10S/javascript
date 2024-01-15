import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref , push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL:"https://playground-ff712-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase (app)
const shoppingListInDB = ref(database , "shoppingList")
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    fruits.push(inputValue)
    render(fruits)
    inputFieldEl.value=""
})

function render (list){
    let innerList=""
    for(let i=0;i<list.length;i++){
        innerList+=`
        <li> ${list[i]} </li>
        `
    }
    shoppingListEl.innerHTML = innerList
}
let fruits =[] 
