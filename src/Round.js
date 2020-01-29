const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    let newTurn = new Turn(guess, this.deck.cards[this.turns]);
    if (newTurn.evaluateGuess() === true) {
      this.correctGuesses.push(newTurn.card.id);
    } else {
      this.incorrectGuesses.push(newTurn.card.id);
    }
    let result = newTurn.giveFeedback();
    this.turns++;
    return result;
  }
  calculatePercentCorrect() {
    let percentCorrect = (this.correctGuesses.length / (this.correctGuesses.length + this.incorrectGuesses.length))*100;
    return percentCorrect;
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the answers correctly!`
  }
};

module.exports = Round;
