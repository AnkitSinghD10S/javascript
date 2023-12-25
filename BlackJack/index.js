let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards =[firstCard , secondCard]// arrays of card 
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl);
// let sumEl=document.getElementById("sum-el")
let sumEl =document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    return 5
}

// function can be hoisted to the top of the code and ccan be used in any line of the code
function startGame(){
    renderGame()
}


function renderGame(){
    cardsEl.textContent= "Cards:"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+"  "
    }
    sumEl.textContent="sum:" + sum
if (sum <= 20) {
    
    message = "Do you want to draw a new card? "
    
} else if (sum === 21) {

    message = "You've got Blackjack!"
    hasBlackJack = true
   
} else {
    message = "You're out of the game!"
    isAlive = false
    
}
messageEl.textContent = message;
}

 
function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    renderGame();
}

