const Turn = require('../src/Turn');

class Round {
  constructor(deck, turn) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.returnCurrentCard = () => {
      return this.deck[0];
    }
    this.takeTurn = (guess) => {
      this.turns++;
      let currentCard = this.returnCurrentCard()
      let newTurn = new Turn(guess, currentCard)
      let result = newTurn.evaluateGuess()
      this.deck.shift()
      return newTurn.giveFeedback(result)
    }
  }
}
module.exports = Round;