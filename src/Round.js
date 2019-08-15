const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.returnCurrentCard().id) : '';
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return parseInt((this.turns - this.incorrectGuesses.length) / this.turns * 100);
  }

  endRound() {
    console.log(`-----------------------------------------------------------------------
    **Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}



module.exports = Round;