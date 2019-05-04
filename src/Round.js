const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck === undefined ? [] : deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(this.returnCurrentCard(), guess);
    this.turns++;

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns * 100)
  }

  endRound() {
  console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

}

module.exports = Round;