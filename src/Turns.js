class Turn {
    constructor(guess, card) {
        this.guess = guess
        this.newCard = card
    }

    returnGuess = () => this.guess

    returnCard = () => this.newCard
    
    evaluateGuess = () => this.guess === this.newCard.correctAnswer

    giveFeedback() {
        if (this.evaluateGuess() === true) {
            return "Correct!"
        } else {
            return "Incorrect!"
        }
    }
    }
    
    

module.exports = Turn;