const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.cards = deck.cards;
    this.currentTurn = '';
    this.currentCard = deck.cards[0];
    this.turnCounter = 0;
    this.incorrectGuesses = [];
    this.numberCorrect = '';
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    this.turnCounter += 1;

    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.cards[this.turnCounter];
    return this.currentTurn.giveFeedback();
    this.endRound();
  };

  calculatePercentCorrect() {
    this.numberCorrect = this.turnCounter - this.incorrectGuesses.length;
    return this.numberCorrect / this.turnCounter;
  };

  endRound() {
    this.numberCorrect = this.turnCounter - this.incorrectGuesses.length;
    if (this.turnCounter === 30) {
      console.log(`** ROUND OVER ** You answered ${this.numberCorrect} of the questions correctly!`)
    }
  };
};

module.exports = Round;
