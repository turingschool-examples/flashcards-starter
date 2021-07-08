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
      this.incorrectGuesses.push(turn.card.id);
    }
    this.turns++;
    return `Your answer of ${turn.guess} is ${turn.giveFeedback()}`;
  }

  calculatePercentCorrect() {
    let correct = this.turns - this.incorrectGuesses.length;
    let percentage = (correct / this.turns) * 100;
    console.log(`You got ${Math.round(percentage)}% correct!`);
    return `You got ${Math.round(percentage)}% correct!`;
  }

  endRound() {
    return this.calculatePercentCorrect();
  }

}



module.exports = Round;
