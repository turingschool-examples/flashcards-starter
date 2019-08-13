// const Card = require('../src/Card');
const Turn = require('../src/Turn');
// const Deck = require('../src/Deck');

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
    let turn = new Turn(guess, this.returnCurrentCard());
    console.log(this.returnCurrentCard())
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.returnCurrentCard().id) : '';
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses.length / this.turns * 100);
  }

  endRound() {

  }
}



module.exports = Round;