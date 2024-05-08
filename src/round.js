const { evaluateGuess } = require("../src/card")

function createRound(deck) {
    var round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    return round
}
function takeTurn(guess, round) {
    const correctAnswer = round.currentCard.correctAnswer
    const evaluation = evaluateGuess(guess, correctAnswer)

    if (evaluation === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    }

    round.turns++
    round.currentCard = round.deck[round.turns]
    return evaluation
}

function calculatePercentCorrect(round) {
    return ((round.turns - round.incorrectGuesses.length) / 30) * 100;
}

function endRound(round) {
    const percentage = calculatePercentCorrect(round)
    console.log(`**Round over!** You answered ${percentage} % of the questions correctly!`)
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}