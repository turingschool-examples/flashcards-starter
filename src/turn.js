function evaluateGuess(guess, correctAnswer) {
    let message = "incorrect!";
    if (guess === correctAnswer) {
        message = "correct!";
    }

    return message;
}

module.exports = {
    evaluateGuess
}
