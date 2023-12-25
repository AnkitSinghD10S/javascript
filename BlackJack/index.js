
let cards =[]// arrays of card 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl);
// let sumEl=document.getElementById("sum-el")
let sumEl =document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
}

// function can be hoisted to the top of the code and ccan be used in any line of the code
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = cards[0]+cards[1]
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
    // console.log("Drawing a new card from the deck!")
    if(isAlive===true && hasBlackJack === false){
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    renderGame();
    }
}

