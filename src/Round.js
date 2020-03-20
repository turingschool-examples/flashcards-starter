const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard = this.deck.allCards[this.turns];
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    // this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctGuesses = this.deck.allCards.length - this.incorrectGuesses.length;
    let percentageCorrect = (correctGuesses / this.deck.allCards.length) * 100;
    return Math.floor(percentageCorrect);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
