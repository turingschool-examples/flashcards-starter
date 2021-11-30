class Turn {
    constructor(guess, playedCard) {
        this.guess = guess;
        this.playedCard = playedCard;
    }
    
    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.playedCard;
    }

    evaluateGuess() {
        if (this.guess === this.playedCard.correctAnswer) {
            return true;
        }
    }

    giveFeedback() {
        const userAnswer = this.evaluateGuess();
        if(userAnswer) {
            return 'Correct!'
        } else {
            return 'Incorrect!';
        }
    }
}



module.exports = Turn;