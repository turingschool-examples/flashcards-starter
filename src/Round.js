const Turn = require('../src/Turn');


class Round {
  constructor(cards) {
    this.currentDeck = cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentDeck.deck[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    if (turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentCorrect = ((this.currentDeck.deck.length - this.incorrectGuesses.length) / (this.currentDeck.deck.length) * 100);
    return percentCorrect;
  }

  endRound() {
    return `** Round Over ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

};

module.exports = Round;
