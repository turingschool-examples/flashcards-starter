const Turn = require('../src/Turn');

class Rounds{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    if(!turn.evaluateGuess()) {
      this.incorrect.push(turn.card.id);
    }
    this.turns++;
    return turn.giveFeedBack();
  }

  calculatePercentCorrect() {
    let ratioWins = (this.turns - this.incorrect.length) / this.turns;
    return (this.turns) ? Math.floor(10000 * ratioWins) / 100 : 0;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Rounds;
