const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.deck.cards.shift();
    return turn.returnFeedback();
  }

  calculatePercentCorrect() {
    let numberCorrect = this.turns - this.incorrectGuesses.length;
    return this.percentCorrect = Math.round((numberCorrect / this.turns) * 100);
  }

  endRound() {
    if (this.deck.cards.length === 0) {
      this.calculatePercentCorrect();
      console.log(`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`);
      return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
    }
  }
}

module.exports = Round;
