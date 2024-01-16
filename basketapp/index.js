import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref , push,onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    // basketList.push(inputValue)
    clearInputField()
    // appendItemToShoppingList(basketList)
})

onValue(shoppingListInDB,function (snapshot){
    // let itemsArray = Object.values(snapshot.val())
    if(snapshot.exists()){
    let itemsArray = Object.entries(snapshot.val())
    // console.log(snapshot.val())
    clearShoppingListEl()
    for(let i=0;i<itemsArray.length;i++){
        let currentItem = itemsArray[i];
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        appendItemToShoppingListEl(currentItem )
        // console.log(itemsArray[i])
        }
    }
    else{
        shoppingListEl.innerHTML="... no itemexist"
    }
    })


function clearInputField(){
    inputFieldEl.value=""
}

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function appendItemToShoppingListEl(item) {
    // shoppingListEl.innerHTML += `<li>${itemValue}</li>`
    let itemID =item[0]
    let itemValue =item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue

    newEl.addEventListener("dblclick",function(){
        // console.log(itemID)
        let exactLocationOfItemInDB = ref(database,`shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}
