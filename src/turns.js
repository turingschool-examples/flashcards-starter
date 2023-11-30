const evaluateGuess = (guess, correctAnswer) => {
    if (guess) {
        guess = guess.toLowerCase()
        if (guess == correctAnswer) {
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