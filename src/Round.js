const Card = require('./Card');
const Game = require('./Game');
const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.currentDeck[0];
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.returnCurrentCard());
    if (newTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turn++
    this.deck.currentDeck.shift();
    return newTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    let correctGuesses = this.turn - this.incorrectGuesses.length;
    return `${correctGuesses / this.turn * 100}%`;
  };

  endRound() {
       console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
    }
};

module.exports = Round;
