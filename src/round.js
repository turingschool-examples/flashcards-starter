function createRound(deck) {
    const newRound = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        message: ''
    }

    return newRound;
}

function takeTurn(guess, round) {
round.message = evaluateGuess(guess, round.currentCard.correctAnswer);
}

module.exports = {
    createRound,
    takeTurn,
    // calculatePercentCorrect,
    // endRound
}