const evaluateGuess = (guess, correctAnswer) => {
    if (guess) {
        if (guess.toLowerCase() === correctAnswer) {
            return `Correct!`
        } else {
            return `Incorrect!`
        }
    } else {
        return `Please choose an answer`
    }
}

module.exports = {
    evaluateGuess
}