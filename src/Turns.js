class Turns {
    constructor(userGuess, currentCard) {
        this.userGuess = userGuess
        this.currentCard = currentCard
    }
    returnGuess() {
        return this.userGuess
    }
    returnCard() {
        return this.currentCard
    }
    evaluateGuess() {
            return this.userGuess === this.currentCard.correctAnswer
    }

    giveFeedback() {
        if (this.evaluateGuess()) {
            return 'correct!'
        } else {
            return 'incorrect!'
        }
    }


        
}





module.exports = Turns