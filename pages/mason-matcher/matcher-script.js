// set 'cards' to all element under the memory-card class
const cards = document.querySelectorAll(".memory-card");

// define variables, hasFlippedCard will be false at first
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// flipcard() takes 'this' (the card clicked), opens its class list, and adds the class "flip"
// if hasFlippedCard is false, then set it to true and set the clicked card to the variable firstCard
// if lockBoard is true then return
function flipCard() {
    this.classList.add("flip");

    if (!hasFlippedCard) {
        if (lockBoard) return;
        if (this === firstCard) return;
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

// takes each element under cards and applies an event listener that will trigger flipCard() when clicked
cards.forEach(card => card.addEventListener("click", flipCard));