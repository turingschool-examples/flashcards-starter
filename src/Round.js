const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn;
    this.currentCard = this.deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(userGuess) {
    this.turn = new Turn(userGuess, this.currentCard);
    this.turnCount++
  }
}

module.exports = Round;
