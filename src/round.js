function evaluateGuess(guess, cardObject) {
    let correct = guess === cardObject.correctAnswer ? true : false
    if (!cardObject.answers.includes(guess)) {
        return 'Please choose a valid option!'
    } else if (correct) {
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
};

module.exports = {
    evaluateGuess,
    // createRound,
    // takeTurn,
    // calculatePercentCorrect
}