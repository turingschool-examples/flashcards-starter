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

  calculatePercentCorrect() {
    return Math.round((this.correctGuesses / this.deck.cards.length) * 100)
  }

  endRound() {
    return `** Round over! ** You answered <${this.calculatePercentCorrect()}>% of the questions correctly!`
  }
}

module.exports = Round;