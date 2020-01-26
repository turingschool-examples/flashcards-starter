const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck[0]
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.currentCard);
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.deck.shift();
    this.currentCard = this.deck[0];
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return this.incorrectGuesses.length / this.turns * 100;
  }
}

module.exports = Round;
