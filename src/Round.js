const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.currentCard = this.deck[0];
        this.currentTurn;
        this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        this.currentTurn = new Turn(guess, this.returnCurrentCard());
        if (!this.currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns++;
        this.currentCard = this.deck[this.turns];
        return this.currentTurn.giveFeedback();
    }

    calculatePercentCorrect() {
        if (this.incorrectGuesses.length) {
            return Math.round(100 - (this.incorrectGuesses.length / this.turns) * 100);
        } else {
            return (100);
        }
    }
    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }

    // calculatePercentCorrect() {
    //     if(this.incorrectGuesses.length) {
    //       return Math.round(100 - (this.incorrectGuesses.length/ this.turns) * 100);
    //     } else {
    //       return (100);
    //     }
    //   }

}


module.exports = Round;