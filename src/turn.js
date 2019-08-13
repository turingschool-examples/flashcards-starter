class Turn {
    constructor(guess, cardObj) {
        this.guess = guess;
        this.currentCard = cardObj;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.currentCard;
    }

    evaluateGuess(cardObj) {
        if (this.guess === cardObj.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }

    giveFeedback(cardObj) {
        if (this.guess === cardObj.correctAnswer) {
            return 'correct!';
        } else {
            return 'incorrect!';
        }
    }
    
}


module.exports = Turn;