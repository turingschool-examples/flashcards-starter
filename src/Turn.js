class Turn {
    constructor(userGuess, currentCardObj) {
        this.userGuess = userGuess;
        this.currentCard = currentCardObj
    };
    returnGuess() {
        return this.userGuess;
    };
    returnCard() {
        return this.currentCard;
    };
    evaluateGuess() {
        let checkAnswer = this.currentCard.correctAnswer === this.userGuess;
        return checkAnswer;
    };
    giveFeedback() {
        if(this.evaluateGuess()) {
            return 'correct!';
        } else {
            return 'incorrect!';
        };
    };
};

module.exports = Turn;