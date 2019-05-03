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
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if(turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    };
    return turn.giveFeedback();
  }

  calculatePercentageCorrect() {
    var percentage = (this.turns - this.incorrectGuesses.length) / (this.turns) * 100;
    return Math.floor(percentage);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`) 
  }

}

module.exports = Round;