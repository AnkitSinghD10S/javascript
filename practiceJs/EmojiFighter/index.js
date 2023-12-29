let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    firstEmoji=fighters[Math.floor(Math.random()*fighters.length)]
    // console.log(firstEmoji)
    secondEmoji=fighters[Math.floor(Math.random()*fighters.length)]
    // console.log(secondEmoji)
    stageEl.textContent= firstEmoji + "  VS  "+ secondEmoji
    console.log( stageEl.textcontent)
})
