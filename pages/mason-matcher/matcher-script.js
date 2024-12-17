// set 'cards' to all elements under the memory-card class
const cards = document.querySelectorAll(".memory-card");

// define variables, hasFlippedCard and lockBoard will be false at first
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let turnCounter = 0;
let turnCounterElement = document.getElementById("turnCounterElement");
let finalCount

let matches = 0;
let winMessage = document.getElementById("win-message")

// flipcard() takes 'this' (the card clicked), opens its class list, and adds the class "flip"
// if hasFlippedCard on the clicked card is false, then set it to true and set the clicked card to the variable firstCard
// if hasFlippedCard on the clicked card is true, set the clicked card to secondCard and run the checkForMatch() function
// if lockBoard is true then return
// if the clicked card is the same as the first card then return
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

// sets the variable isMatch to true or false depending on whether the data attribute of the first card is the same the second card's
// if isMatch is true, disableCards() will be called
// if isMatch is false, unflipCards() will be called
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

// disableCards() removes the click event listeners, making the cards unclickable, then resets the board
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    // win message and win detection
    matches += 1;

    if (matches === 8) {
        winRating()
    }

    resetBoard();
    addTurn()
}

// winRating gives a different win message depending on the user's amount of turns
// this is called before a turn is added, so all the values are offset by -1
function winRating() {
    finalCount = turnCounter + 1

    if (turnCounter === 7) {
        winMessage.innerText = "Holy aura! You matched all the Masons in " + finalCount + " turns! That's a perfect game! You have so much aura and fluff, but I still have more."
    }
    if (turnCounter > 7 && turnCounter <= 11) {
        winMessage.innerText = "Wow! You matched all the Masons in " + finalCount + " turns! Good boy."
    }
    if (turnCounter > 11 && turnCounter <= 15) {
        winMessage.innerText = "You matched all the Masons in " + finalCount + " turns. +5 Aura."
    }
    if (turnCounter > 15 && turnCounter <= 19) {
        winMessage.innerText = "You matched all the Masons in " + finalCount + " turns. You have terrible memory and negative aura 😂. -100000 aura."
    }
    if (turnCounter > 19) {
        winMessage.innerText = "Wow, you have the worst memory of all time! " + finalCount + " is one of the worst scores I've ever seen! You have negative rizz, negative aura, and negative fluff. Get off my website 😡😡😡😡😡"
    }
}

// unflipCards() sets the lockBoard variable to true
// sets a function to remove the flip class from the cards, unflipping them to their original state after a timeout of 1000ms
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000)

    addTurn()
}

// resetBoard() will set the variables hasFlippedCard and lockBoard to their original false states
// it will also set firstCard and secondCard back to their original null states
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// declares then executes the shuffle function immediately after its declaration
// declares a variable randomPos as a random number from 0-15 then assigns it to the order property under each card
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

// adds a turn to turnCounter and updates the text on the page
function addTurn() {
    turnCounter += 1;
    turnCounterElement.innerText = turnCounter;
}

// refreshes the page when clicking the new game button
function newGame() {
    location.reload();
}

// takes each element under cards and applies an event listener that will trigger flipCard() when clicked
cards.forEach(card => card.addEventListener("click", flipCard));