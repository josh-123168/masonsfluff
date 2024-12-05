let move = 0
let testEl = document.getElementById("test")
let masonEl = document.getElementById("mason")
let win = 0
let masonMove = 0

function rock() {
    move = 1
    testEl.innerText = "Rock"
    mason.innerText = ""
}
function paper() {
    move = 2
    testEl.innerText = "Paper"
    mason.innerText = ""
}
function scissors() {
    move = 3
    testEl.innerText = "Scissors"
    mason.innerText = ""
}
function play() {

    const ROCK = 1

    masonMove = Math.floor(Math.random() * 3 + 1)


    if (masonMove == ROCK) { mason.innerText = "I choose rock!" }
    if (masonMove == 2) { mason.innerText = "I choose paper!" }
    if (masonMove == 3) { mason.innerText = "I choose scissors!" }

    if (masonMove == move) {
        testEl.innerText = "Tie!"
    }
    if (masonMove == 1 & move == 2) {
        testEl.innerText = "you win this time >:[]"
        win=win+1
    }
    if (masonMove == 1 & move == 3) {
        testEl.innerText = "I win, hahahaha"
    }
    if (masonMove == 2 & move == 1) {
        testEl.innerText = "I win, hahahaha"
    }
    if (masonMove == 2 & move == 3) {
        testEl.innerText = "you win this time >:[]"
        win=win+1
    }
    if (masonMove == 3 & move == 1) {
        testEl.innerText = "you win this time >:[]"
        win=win+1
    }
    if (masonMove == 3 & move == 2) {
        testEl.innerText = "I win, hahahaha"
    }
wins.innerText=win
}
