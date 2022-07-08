class Turn {
    constructor(guess, card) {
        this.userGuess = guess;
        this.currentCard = card;

    };

    returnGuess() {
        return this.userGuess;

    };

    returnCard() {
        return this.currentCard;

    };

    evaluateGuess() {
        return this.userGuess === this.currentCard.correctAnswer;

    };

    giveFeedback() {
        const isCorrect = this.evaluateGuess();
        return (isCorrect ? 'correct!' : 'incorrect!');
        
    };

};

module.exports = Turn;