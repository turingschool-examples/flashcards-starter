const Turn = require('./Turn');

class Round{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.deck.cards.shift();
    return turn.returnFeedback();
  }

}

module.exports = Round;
