class Turn {
    constructor(userGuess, currentCard) {
        this.guess = userGuess;
        this.card =  currentCard;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess() {
        if(this.guess === this.card.correctAnswer) {
            return true;
        }
            return false;
    }

    giveFeedback() {
        if(this.evaluateGuess()) {
            return 'Correct!';
        }
            return 'Incorrect!';
    }
}   


module.exports = Turn;