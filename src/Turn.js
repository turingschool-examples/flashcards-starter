class Turn {
    constructor(userGuess, currentCard) {
        this.guess = userGuess;
        this.card =  currentCard;
    }

    returnGuess() {
        console.log(this.guess);
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
        if(this.evaluateGuess() !== true) {
            return 'incorrect!';
        }
            return 'correct!';
    }
}   

module.exports = Turn;