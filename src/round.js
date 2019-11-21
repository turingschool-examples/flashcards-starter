const Turn = require('../src/turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.counter = 0;
    this.incorrectGuess = [];
    this.correctGuess = [];
  }
  
  takeTurn(guess) {
    let cardPlayed = this.returnCurrentCard();
    let turn = new Turn(guess, cardPlayed);
    this.counter+= 1;
    if (turn.evaluateGuess()) {
      this.correctGuess.push(guess);
    } else {
      this.incorrectGuess.push(guess);
    }
    turn.giveFeedback();
    this.deck.cards.shift();
    return this.counter;
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  calculatePercentCorrect() {
    var total = (this.correctGuess.length + this.incorrectGuess.length);
    return parseInt((this.correctGuess.length / total) * 100);
  }
}

module.exports = Round;
