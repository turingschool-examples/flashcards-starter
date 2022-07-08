const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuessIds = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turnCount]);
    turn.evaluateGuess();
    if (!turn.isCorrect) {
      this.incorrectGuessIds.push(this.deck.cards[this.turnCount].id);
    }
    this.turnCount ++;
    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return parseInt(((this.turnCount - this.incorrectGuessIds.length) / this.turnCount) * 100);
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

}


module.exports = Round;


