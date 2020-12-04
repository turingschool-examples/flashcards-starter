const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    currentCard() {
        return this.deck.shift();
    }
    takeTurn(guess) {
        this.turns++;
        var turn = new Turn(guess, this.deck[0])
        turn.evaluateGuess(this.guess);
        turn.giveFeedback(this.guess);
        if (turn.guess !== this.deck[0].correctAnswer) {
            this.incorrectGuesses.push(this.deck[0].id);
        }
    }
}

module.exports = Round;