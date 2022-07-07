class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.card = card

    }

    returnGuess() {
        return this.userGuess
    }
    
    returnCard() {
        return this.card
    }

    evaluateGuess() {
        if (this.userGuess !== this.returnCard.correctAnswer) {
            return false;
        } else {
            return true;
        }
    }

    giveFeedback() {
        if (this.userGuess === this.card.correctAnswer) {
            return "CORRECT!!!";
        } else {
            return "INCORRECT!!!";
        }
    }

}

module.exports = Turn;

