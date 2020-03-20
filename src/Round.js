const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess, currentCard) {
    const turn = new Turn(guess, this.returnCurrentCard());
    const isCorrect = turn.evaluateGuess();

    if (!isCorrect) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
      this.turns++;
      return turn.giveFeedback();
    } else {
      this.turns++;
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
