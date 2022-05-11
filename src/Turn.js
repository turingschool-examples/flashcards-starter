class Turn {
    constructor(guess, cardObject) {
       this.playerGuess = guess;
       this.currentCard = cardObject;
       }

    returnGuess() {
        return this.playerGuess;
    }

    returnCard() {
        return this.currentCard;
    }

    evaluateGuess() {
        if (this.playerGuess === this.currentCard.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }

    giveFeedback() {
        if (this.playerGuess === this.currentCard.correctAnswer) {
            return `Correct!`
        } else {
            return `Incorrect!`
        }
    }
   }
   module.exports = Turn;