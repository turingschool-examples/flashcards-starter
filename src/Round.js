const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.incorrectGuesses = []
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turns += 1;
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(turn.card.id)
    return turn.giveFeedback()
  }
}

module.exports = Round
