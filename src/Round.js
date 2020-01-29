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
      this.correctGuesses.push(turn.card.id);
    } else {
      this.incorrectGuesses.push(turn.card.id);
    }
    let result = newTurn.giveFeedback();
    this.turns++;
    return result;
  }
  calculatePercentCorrect() {

  }
  endRound() {

  }
};

module.exports = Round;
