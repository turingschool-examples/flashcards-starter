const { evaluateGuess } = require('../src/turns')
const { countCards } = require('../src/deck')

const createRound = (deck) => {
    const round = {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
    }
    return round
}

const takeTurn = (guess, round) => {
    const numCards = countCards(round.deck);
    const resultofGuess = evaluateGuess(guess, round.currentCard.correctAnswer)

    if (resultofGuess === "Incorrect!") {
        round.incorrectGuesses.push(round.currentCard.id)
    }

    round.turns += 1
    round.currentCard = round.deck[round.turns]

    return resultofGuess
}

const calculatePercentageCorrect = (round) => {
    const deckLength = round.deck.length
    const incorrectGuessesLength = round.incorrectGuesses.length
    const percentageCorrect = ((deckLength - incorrectGuessesLength) / deckLength) * 100

    return Number(percentageCorrect.toFixed(2))
}

function endRound(round) {
    const percentCorrect = calculatePercentageCorrect(round)

    console.log(`** Round over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`);
    return `** Round over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`;
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentageCorrect,
    endRound
}