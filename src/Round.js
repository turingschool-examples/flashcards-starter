const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const topCard = this.returnCurrentCard();
    const turn = new Turn(guess, topCard);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(topCard.id);
    }
    this.deck.shift();
    return turn.giveFeedback(this.incorrectGuesses);
  }

  calculatePercentCorrect() {
    const percentIncorrect = Math.ceil(this.incorrectGuesses.length / this.turns * 100);
    const percentCorrect = 100 - percentIncorrect;
    return percentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
