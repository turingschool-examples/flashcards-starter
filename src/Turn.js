class Turn {
    constructor(guess, currentCard) {
        this.guess = guess;
        this.currentCard = currentCard
        // console.log(guess)
        // console.log(currentCard)
    }

returnGuess() {
        return this.guess
}

returnCard() {
    return this.currentCard
}

evaluateGuess() {

    if(this.guess === this.currentCard.correctAnswer){
        return true
    } else {
        return false
    }
}

giveFeedback() {
    if(this.evaluateGuess()){
        return 'correct!'
    } else {
        return 'incorrect!'
    }
}
}

module.exports = Turn;