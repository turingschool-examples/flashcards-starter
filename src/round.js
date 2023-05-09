// Your round will be the object that organizes guesses and 
// records if they are correct or incorrect.

const { evaluateGuess } = require("./card");
const { countCards } = require("./deck");

const createRound = (deck) => {
    var round = {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],

    }
    return round;
}

const takeTurn = (guess, currentRound, deck) => {
    var answer = evaluateGuess(guess, currentRound.currentCard)
    if (answer === 'incorrect!'){
        currentRound.incorrectGuesses.push(currentRound.currentCard.id)
    }
    currentRound.turns += 1;
    currentRound.currentCard = deck[currentRound.turns]
    return answer
}

const calculatePercentCorrect = (round) => {
    var turnsTaken = round.turns
    var wrongGuesses = round.incorrectGuesses.length
    var percentageWrong = (wrongGuesses/turnsTaken) * 100;
    var percentageRight = Math.floor(100 - percentageWrong)
    return percentageRight;
}

const endRound = (round) => {
    var correct = calculatePercentCorrect(round)
    return `** Round over! ** You answered ${correct}% of the questions correctly!`
}

module.exports = { 
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
};