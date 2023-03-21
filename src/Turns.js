class Turns {
    constructor(userGuess, currentCard) {
        this.userGuess = userGuess
        this.currentCard = currentCard
        this.rightAnswer = false
        this.feedback = null
    }
    returnGuess() {
        return this.userGuess
    }
    returnCard() {
        return this.currentCard
    }
    evaluateGuess() {
            if (this.userGuess === this.currentCard.correctAnswer) {
                return this.rightAnswer = true 
            } else {
                this.feedback = 'incorrect!' 
                return this.rightAnswer = false
            }
    }
    giveFeedback() {
        if (this.rightAnswer === true) {
            this.feedback = 'correct!'
        } else {
            this.feedback = 'incorrect!'
        }
    }


        
}





module.exports = Turns