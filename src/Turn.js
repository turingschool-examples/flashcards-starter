class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
        this.isCorrect;
    };

    returnGuess() {
        return this.guess;
    };

    returnCard() {
        return this.card;
    };

    evaluateGuess() {
        this.isCorrect = this.guess === this.card.correctAnswer;
        return this.isCorrect;
    };

    giveFeedback() {
       if (this.isCorrect) {
        return 'Correct! 😎';
       } else {
        return 'Incorrect! 🙁';
        };
    };
};

module.exports = Turn;