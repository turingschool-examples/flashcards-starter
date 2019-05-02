const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.correctGuesses = 0
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns]; //Why doesn't this update with this.turns
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    const turn = this.instantiateTurn(guess, this.currentCard)
    turn.evaluateGuess() ? this.guessTrue() : this.guessFalse();
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

  guessTrue() {
    this.correctGuesses += 1;
  }

  guessFalse() {
    this.incorrectGuesses.push(this.currentCard.id)
  }
}

module.exports = Round;