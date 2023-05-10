const { evaluateGuess } = require("./card");

const createRound = (deck) => {
    var round = {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],

    }
    return round;
}

const takeTurn = (guess, currentRound) => {
    var answer = evaluateGuess(guess, currentRound.currentCard)
    if (answer === 'incorrect!'){
        currentRound.incorrectGuesses.push(currentRound.currentCard.id)
    }
    currentRound.turns += 1;
    currentRound.currentCard = currentRound.deck[currentRound.turns]
    if (currentRound.turns >= currentRound.deck.length){
        currentRound.currentCard = false;
    }
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
    console.log(`** Round over! ** You answered ${correct}% of the questions correctly!`)
}

module.exports = { 
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
};