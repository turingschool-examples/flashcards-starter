const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.deck
    this.currentCard; 
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    this.currentCard = this.deck[0]    
  }
  takeTurn(guess) {
    this.turns++
    let currentTurn = new Turn(guess, this.currentCard)
    return currentTurn.giveFeedBack()
  }
}

module.exports = Round