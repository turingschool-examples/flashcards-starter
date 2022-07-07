class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }

    returnGuess() {
        return this.guess;
    }
    
    returnCard() {
       return this.card
    }

    evaluateGuess() {
        if (this.guess === this.card.correctAnswer) {
            return true
        } else {
            return false
        } 
    }

    giveFeedback() {
        const guess = this.evaluateGuess();
        if (guess === true) {
            return 'Correct!'
        } else 'Incorrect!'
     }
    }




module.exports = Turn;