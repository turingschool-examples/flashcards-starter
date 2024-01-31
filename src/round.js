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

function calculatePercentCorrect(round) {
    percentIncorrect = Math.round((round.incorrectGuesses.length / round.turns) * 100);
    percentCorrect = 100 - percentIncorrect;
    
    return percentCorrect;
}

function endRound(round) {
    console.log(`**Round Over!** You answered ${round.percentCorrect}% of the questions correctly!`)
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}