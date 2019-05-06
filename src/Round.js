const Turn = require('../src/Turn');


class Round {

  constructor(deck) {
    this.deck = deck || []
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess, card) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(turn.card.id)
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.turns -this.incorrectGuesses.length) / this.turns * 100;
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

}

module.exports = Round;