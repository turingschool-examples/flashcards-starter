const Turn = require("../src/Turn.js");

class Round{
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.currentCard = this.deck.cards[this.turns]
    this.incorrectGuesses = []
  }

  returnCurrentCard() {

    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++
    let turn = new Turn(guess, this.currentCard)
    
    this.currentCard = this.deck.cards[this.turns]
    
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
      return turn.giveFeedback() 
    } else {
      return turn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
    return this.incorrectGuesses.length / this.turns
  }
}

module.exports = Round