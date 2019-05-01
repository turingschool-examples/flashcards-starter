const Turn = require('../src/Turn');
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
    turn.returnGuess()
    turn.returnCard()
    // turn.giveFeedback()
    // console.log(answer)
    // return turn
  }

  instantiateTurn(guess, card) {
    return new Turn(guess, card)
  }
}

module.exports = Round;