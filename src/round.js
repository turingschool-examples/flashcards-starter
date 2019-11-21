const Turn = require('../src/turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    console.log(this.deck);
    this.counter = 0;
    // this.turn = turn;
    this.incorrectGuess = [];
    this.correctGuess = [];
  }

  takeTurn(guess) {
    let cardPlayed = this.returnCurrentCard();
    let turn = new Turn(guess, cardPlayed);
    // console.log(guess);
    this.counter++;
    // console.log('turn console:', turn.evaluateGuess())
    if (turn.evaluateGuess()) {
      this.correctGuess.push(guess);
      // console.log('correct', this.correctGuess)
    } else {
      this.incorrectGuess.push(guess);
    }
    turn.giveFeedback();
    this.deck.shift();
    return this.counter;
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  calculatePercentCorrect() {
    var total = (this.correctGuess.length + this.incorrectGuess.length);
    return parseInt((this.correctGuess.length / total) * 100);
  }

  // figure out how to use this => process.exit();
}

module.exports = Round;
