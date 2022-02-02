const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.currentCard = this.deck[0];
        this.incorrectGuesses = [];
        this.turn;
        this.gamePercentage;
    }

    returnCurrentCard() {
        return this.currentCard;
    }
    
    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard);
        this.turns ++;
        this.currentCard = this.deck[this.turns];
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(turn.currentCard.id);
        }
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        let percentage = (this.turns - this.incorrectGuesses.length) / this.turns * 100;
        this.gamePercentage = Math.round(percentage);
        return this.gamePercentage;
    }

    endRound() {
        return `** Round Over! ** You answered ${this.gamePercentage}% of the questions correctly!`;
    }
}


module.exports = Round;