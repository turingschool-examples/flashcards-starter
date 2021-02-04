const Game = require("./Game");
const Turn = require("./Turn");
const Card = require('../src/Card');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.timer = 0
    }

    returnCurrentCard() {
        return this.deck.cards[0];
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.returnCurrentCard());
        turn.evaluateGuess() ? null : this.incorrectGuesses.push(this.returnCurrentCard().id);
        this.turns++;
        this.deck.cards.shift();
        return this.deck.cards.length === 0 ? turn.giveFeedback() + ' ' + this.endRound() : turn.giveFeedback();
    }

    calculatePercentCorrect() {
        return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
    }

    endRound() {
        return `
-------------------------------------------

Round over! You completed the test in ${this.formatTimer(this.timer)} seconds
You answered ${this.calculatePercentCorrect()}% of the questions correctly!
Press ENTER to review the cards you got wrong

-------------------------------------------`
    }

    formatTimer(seconds) {
        if (seconds < 10) {
            return `0:0${seconds}`;
          } else if (seconds < 60) {
            return `0:${seconds}`;
          } else if (seconds - Math.floor(seconds / 60) * 60 < 10) {
            return `${Math.floor(seconds / 60)}:0${seconds - Math.floor(seconds / 60) * 60}`;
          } else {
            return `${Math.floor(seconds / 60)}:${seconds - Math.floor(seconds / 60) * 60}`;
          }
    }
}

module.exports = Round;