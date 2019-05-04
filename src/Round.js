const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.incorrectGuesses = [];
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.deck[this.turns]);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
      return turn.giveFeedback()
    } else {
      return turn.giveFeedback();
    }
  }
  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round;

