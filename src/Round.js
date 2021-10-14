const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.deck[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    const feedback = turn.giveFeedback();

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns += 1;
    this.currentCard = this.deck[this.turns];

    return feedback;
  }

  calculatePercentCorrect() {
    const correctGuesses = (this.turns - this.incorrectGuesses.length);
    const percentCorrect = (correctGuesses / this.turns) * 100;
    return `${percentCorrect.toFixed(0)}%`;
  }

  endRound() {
    const message = `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
    console.log(message)
    return message;
  }
}

module.exports = Round;
