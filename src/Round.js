// this object will take in responses and record guesses.
// methods = returnCurrentCard, takeTurn, calculatePercentCorrect, endRound
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    

  }
  returnCurrentCard() {
    return this.currentCard;
  };
  takeTurn(guess) {
    var turn = new Turn(guess, this.currentCard);
    this.turns++;
  }
}

module.exports = Round;
