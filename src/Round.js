const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns ++;
    this.currentCard = this.deck.cards[this.turns];
    turn.evaluateGuess() ? console.log() : this.incorrectGuesses.push(guess.id);
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length/this.turns)) * 100);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
