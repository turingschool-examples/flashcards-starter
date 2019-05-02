const Turn = require('../src/Turn');
const Card = require('../src/Card');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns];
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    const turn = this.instantiateTurn(guess, this.currentCard)
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.incrementTurn()
    return turn.giveFeedback()
  }

  incrementTurn() {
    this.turns += 1;
    this.currentCard = this.deck.cards[this.turns];
  }

  instantiateTurn(guess, card) {
    return new Turn(guess, card)
  }
}

module.exports = Round;