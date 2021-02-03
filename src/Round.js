const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.cards[0];
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.returnCurrentCard());
        turn.evaluateGuess() ? null : this.incorrectGuesses.push(this.returnCurrentCard().id)
        this.turns++;
        this.deck.cards.shift();
        return this.deck.cards.length === 0 ? turn.giveFeedback() + ' ' + this.endRound() : turn.giveFeedback()
    }

    calculatePercentCorrect() {
        return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
    }

    endRound() {
        return `Round over! You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;