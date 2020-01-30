const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
    this.currentCard = this.deck.cards[this.turns];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess, card) {
    let currentTurn = new Turn(guess, card);
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentTurn.card)
    }
    this.turns++;

    return currentTurn;
  }
  calculatePercentCorrect() {

  }
  endRound() {

  }
}

module.exports = Round;
