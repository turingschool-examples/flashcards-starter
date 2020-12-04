class Turn {
    constructor(guess, currentCard) {
        this.guess = guess;
        this.currentCard = currentCard;
    }
    returnGuess() {
        return this.guess;
    }
    returnCard() {
        return this.currentCard;
    }
    evaluateGuess() {
        return this.guess === this.currentCard.correctAnswer;
    }
    giveFeedBack() {
        return this.guess === this.currentCard.correctAnswer ? 'Way to go! You got it right!' : 'Keep trying! You are close!';
    }
}
module.exports = Turn;