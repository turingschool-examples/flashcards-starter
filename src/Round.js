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
    this.turns++;
    const turn = new Turn(guess, card);
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(card.id)
  }

  calculatePercentCorrect() {
    return this.incorrectGuesses.length / this.turns * 100;
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round;