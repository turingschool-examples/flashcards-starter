const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(currentGuess) {
    const turn = new Turn(currentGuess, this.deck.cards[0]);
    this.turn++
    this.deck.cards.shift()
    this.incorrectGuesses.push(currentGuess)
    return turn.giveFeedback()
  }

}

module.exports = Round;