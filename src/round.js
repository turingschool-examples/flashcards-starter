const { createCard, evaluateGuess } = require('../src/card');

function createRound(deck) {
    const newRound = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
    }

    return newRound;
}

function takeTurn(guess, round) {
    message = evaluateGuess(guess, round.currentCard.correctAnswer);
    if (message === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id);
    }
    round.turns++;
    round.currentCard = round.deck[round.turns];

    return message;
}

module.exports = {
    createRound,
    takeTurn,
    // calculatePercentCorrect,
    // endRound
}