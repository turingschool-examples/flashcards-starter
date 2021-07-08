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
    return `Your answer of ${turn.guess} is ${turn.giveFeedback()}`;
  }

  calculatePercentCorrect() {
    return (100 - Math.round((this.incorrectGuesses.length/this.deck.cards.length) * 100))
  }

  endRound() {
    return `You got ${this.calculatePercentCorrect()}% correct!`
  }

}



module.exports = Round;
