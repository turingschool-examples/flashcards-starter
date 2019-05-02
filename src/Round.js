const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck === undefined ? [] : deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  nextCard() {
    this.deck.shift();
    return this.deck;
  }

  createNewTurn(guess) {
    const card = this.returnCurrentCard;
    return new Turn(guess, card);
  }

  takeTurn(guess) {
    this.turns++;
    this.nextCard();
  }

  calculatePercentageCorrect() {
    return((this.turns - this.incorrectGuesses.length / this.turns) * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`) 
  }

}

module.exports = Round;