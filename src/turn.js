function evaluateGuess(guess, correctAnswer) {
    let correct = guess === correctAnswer ? true : false
    if (correct) {
        return 'Correct!'
    } else if (!correct) {
        return 'Incorrect!'
    }
}

module.exports = {
    evaluateGuess
}