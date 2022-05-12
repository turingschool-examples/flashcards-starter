class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
        this.evaluate = false;
        this.feedback = 'Incorrect';
    };

    returnGuess() {
        return this.guess;
    };

    returnCard() {
        return this.card;
    };

    evaluateGuess() {
        if (this.guess === this.card.correctAnswer) {
            this.evaluate = true;
        }
        return this.evaluate;
    };

    giveFeedback() {
        if (this.evaluate === true) {
            this.feedback = 'Correct!';
        }
        return this.feedback;
    };
}

module.exports = Turn;