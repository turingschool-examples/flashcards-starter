class Turn {
    constructor(userGuess, currentCard) {
        guessCorrect = null;
    }
    returnGuess(userGuess) {
        return userGuess;
    }
    returnCard(currentCard) {
        return currentCard;
    }
    evaluateGuess(userGuess, currentCard) {
        userGuess === currentCard.correctAnswer ? true : false;
    }
    giveFeedback() {
        guessCorrect === true ? "correct!" : "incorrect!";
    }
}