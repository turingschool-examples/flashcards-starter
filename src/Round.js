const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    // this.game = game;
  }

  returnCurrentCard() {
      return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess(turn.card)) {
      this.incorrectGuesses.push(turn.card.id)
    }
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let result = (this.turns - this.incorrectGuesses.length) / this.turns * 100; 
    return Math.round(result);
  }

  endRound() {
    // let percent = this.calculatePercentCorrect();
    let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    // if (percent < 90) {
    //   this.game.start();
    // }
    return message;
  }
}

module.exports = Round;