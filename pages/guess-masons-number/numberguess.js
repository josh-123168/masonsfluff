function playGame() {
    let computerChoice = Math.floor(Math.random() * 10) + 1;
    let playerGuess = parseInt(document.getElementById('guess').value);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10) {
        document.getElementById('result').textContent = "That's not a number between 1 and 10 bruh💀😭💀😭...GET OUTTT!❌💀😭❌🤦😂🙄";
        return;
    }

    if (playerGuess === computerChoice) {
        document.getElementById('result').textContent = `Good shi boy👏👏👏 The number that Mason was thinking of was ${computerChoice}.`;
    } else {
        document.getElementById('result').textContent = `YOUR WRONGGG🤣🤣🤣🤣. The number that Mason was thinking of was ${computerChoice}❌💀😭❌🤦😂`;
    }
}