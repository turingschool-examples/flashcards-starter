const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.deck
    this.currentCard; 
    this.turns = 0
    this.incorrectGuesses = []
    this.correctGuesses = []
  }
  returnCurrentCard() {
    if (!this.currentCard) {
      this.currentCard = this.deck[0]
      this.deck.shift()
    } else {
      this.currentCard = this.deck[0]
      this.deck.shift()
    }
  }

  takeTurn(guess) {
    this.returnCurrentCard() 
    this.turns++
    let currentTurn = new Turn(guess, this.currentCard)
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentTurn.guess)
      return currentTurn.giveFeedBack()
    } else {
      this.correctGuesses.push(currentTurn.guess)
      return currentTurn.giveFeedBack()
    }
  }
}

module.exports = Round