const Deck = require("./Deck");
const Turn = require("./Turn");

class Round {
    constructor(deck = {}) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    };

    returnCurrentCard() {
        return this.deck[0];
    };

    takeTurn(guess) {
        this.turns++;
        const turn = new Turn(guess, this.returnCurrentCard());
        turn.handleGuess();
        if (turn.evaluateGuess() === false) {
            this.incorrectGuesses.push(this.returnCurrentCard().id);
        };
        this.deck.shift();
    };

    calculatePercentCorrect() {
        return (this.turns - this.incorrectGuesses.length)/this.turns * 100;
    };

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    };
};


module.exports = Round;