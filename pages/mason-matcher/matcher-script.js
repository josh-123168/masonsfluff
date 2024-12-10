// set 'cards' to all elements under the memory-card class
const cards = document.querySelectorAll(".memory-card");

// define variables, hasFlippedCard and lockBoard will be false at first
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let turnCounter = 0;
let turnCounterElement = document.getElementById("turnCounterElement");

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

    resetBoard();
    addTurn()
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

// resetBoard() will set the variables hasFlippedCard and lockBoard to false
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

function addTurn() {
    turnCounter += 1;
    turnCounterElement.innerText = turnCounter;
}

// takes each element under cards and applies an event listener that will trigger flipCard() when clicked
cards.forEach(card => card.addEventListener("click", flipCard));