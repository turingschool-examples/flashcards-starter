function evaluateGuess(guess, cardObject) {
    let valid = cardObject.answers.includes(guess);
    let correct = guess === cardObject.correctAnswer ? true : false;
    if (!valid) {
        return 'Please choose a valid option!'
    } else if (correct) {
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
};

function createRound(deckArray) {
    let newRound = {
        deck: deckArray,
        currentCard: deckArray[0],
        turns: 0,
        incorrectGuesses: []
    };
    return newRound
};



module.exports = {
    evaluateGuess,
    createRound,
    // takeTurn,
    // calculatePercentCorrect,
    // endRound
}