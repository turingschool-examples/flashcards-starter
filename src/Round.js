const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  };
  takeTurn(answer) {
    let turn = new Turn(answer, this.deck.cards[0]);
    this.turns += 1;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[0].id);
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  };
  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
  }
}

module.exports = Round;
