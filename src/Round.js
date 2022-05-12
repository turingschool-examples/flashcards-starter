const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.cards = deck.cards;
    this.currentTurn = '';
    this.currentCard = deck.cards[0];
    this.turnCounter = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    this.turnCounter += 1;

    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuess.push(this.currentCard.id)
    }
    this.currentCard = this.cards[this.turnCounter];
    return this.currentTurn.giveFeedback()
  };
};

module.exports = Round;
