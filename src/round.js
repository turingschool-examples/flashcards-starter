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



module.exports = {
    evaluateGuess,
    // createRound,
    // takeTurn,
    // calculatePercentCorrect,
    // endRound
}