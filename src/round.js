const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck.cards;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.returnCurrentCard().id) : null;
    this.turns ++;
    return turn.giveFeedBack();
  }


  calculatePercentCorrect(deck) {
    const incorrect = this.incorrectGuesses.length;
    return Math.round(incorrect / this.turns * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    process.exit();
  }
}

module.exports = Round;
