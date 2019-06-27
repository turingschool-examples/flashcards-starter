const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns ++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentCorrect = 
    ((this.deck.cards.length - this.incorrectGuesses.length) / this.turns) * 100;
    return parseInt(percentCorrect.toFixed());
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round;