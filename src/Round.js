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

  takeTurn(guess) {
    const turn = this.instantiateTurn(guess, this.deck.cards[this.turns])
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
    }
    this.turns += 1
    return turn.giveFeedback()
  }

  instantiateTurn(guess, card) {
    return new Turn(guess, card)
  }
}

module.exports = Round;