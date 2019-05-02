const Turn = require('../src/Turn');
const Card = require('../src/Card');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn(guess, card) {
    this.turns += 1
    const turn = this.instantiateTurn(guess, card)
    turn.evaluateGuess()
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(card.id)
    }
  }

  instantiateTurn(guess, card) {
    return new Turn(guess, card)
  }
}

module.exports = Round;