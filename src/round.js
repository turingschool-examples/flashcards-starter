// Your round will be the object that organizes guesses and 
// records if they are correct or incorrect.

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

const takeTurn = (guess, currentRound, deck) => {
    var answer = evaluateGuess(guess, currentRound.currentCard)
    if (answer === 'incorrect!'){
        currentRound.incorrectGuesses.push(currentRound.currentCard.id)
    }
    currentRound.turns += 1;
    currentRound.currentCard = deck[currentRound.turns]
    return answer
}

module.exports = { 
    createRound,
    takeTurn,
};