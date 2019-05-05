const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck || [];
    // this.deck = deck.cards || [];
    // this.deck = deck === undefined ? [] : deck.cards; ORIGINAL
    this.turns = 0;
    this.incorrectGuesses = [];
    if (this.deck === undefined) {
      this.deck = [];
    } else {
      this.deck = deck.cards;
    }
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess, deck) {
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