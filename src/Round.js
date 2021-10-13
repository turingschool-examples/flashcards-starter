const Turn = require("./Turn");
const Card = require('../src/Card');
const Game = require('../src/Game');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess, card) {
    let newTurn = new Turn(guess, card);
    if (newTurn.evaluateGuess()) {
      this.turns += 1;
      this.deck.cards.shift();
      newTurn.giveFeedback();
      return "true";
    } else {
      this.incorrectGuesses.push(card.id);
      this.turns += 1;
      this.deck.cards.shift();
      newTurn.giveFeedback();
      return "false";
    }
  }
  calculatePercentCorrect() {
    if (this.incorrectGuesses.length === 0) {
      return 100;
    } else {
      let incorrect = this.incorrectGuesses.length / this.turns
      return (100 - incorrect * 100)                
    }
  }
  endRound() {
    if (this.deck.cards.length === 0) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }
}

module.exports = Round;