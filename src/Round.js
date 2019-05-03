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

    turn.evaluateGuess() ? null : this.incorrectGuesses.push(turn.card.id);
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    console.log('in round, this.turns: ', this.turns);
    console.log('in round, this.incorrectGuesses.length: ', this.incorrectGuesses.length);
    return (this.incorrectGuesses.length / this.turns * 100)
  }

  endRound() {
  console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

};

module.exports = Round;