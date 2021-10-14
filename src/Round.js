const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck[this.turns]);
    this.turns += 1
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id)
    }
    return turn.giveFeedback();
  }
}

module.exports = Round;
