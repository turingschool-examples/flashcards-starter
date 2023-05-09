function evaluateGuess(guess, correctAnswer){
    if(guess === correctAnswer){
        return 'correct!'
    } else {
        return 'incorrect!'
    }
};

module.exports = {
    evaluateGuess
};