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

  takeTurn(answer) {
    const turn = new Turn(answer, this.returnCurrentCard())
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card);
    }
    this.turns++;
    return `${turn.guess} is ${turn.giveFeedback()}`
  }

  calculatePercentCorrect() {
    let correct = this.turns - this.incorrectGuesses.length;
    let percentage = (correct/this.turns) * 100;

    return `You got ${Math.round(percentage)}% correct!`;
  }

  endRound() {
    return this.calculatePercentCorrect();
  }

}

module.exports = Round;
