function createRound(deck) {
    const newRound = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }

    return newRound;
}

module.exports = {
    createRound,
    // takeTurn,
    // calculatePercentCorrect,
    // endRound
}