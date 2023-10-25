// Iteration 8: Making scoreboard functional
var scoreBox = document.getElementById('score-board')

let params = new URLSearchParams(window.location.search)

let score = params.get("score")

scoreBox.textContent = score

var playagain = document.getElementById('play-again-button')

playagain.addEventListener('click', ()=>{
    window.location.href= 'game.html'
})

