class Turn {
    constructor(playerGuess, card) {
        this.playerGuess = playerGuess
        this.card = card
    }
    returnGuess() {
        return this.playerGuess
    }
    returnCard() {
        return this.card
    }
    evaluateGuess() {
        if(this.playerGuess === this.card.correctAnswer){
            return true
        } else {
            this.isCorrect = false
            return false
        }
    }
    giveFeedback() {
        if(this.evaluateGuess() === true) {
            return 'That is correct!'
        } else {
            return 'That is incorrect!'
        }
    }
}




module.exports = Turn;