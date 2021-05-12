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
    
    // console.log(`turn #${this.turns}: `,turn)
    if(!turn.evaluateGuess()) {
      // console.log(turn.evaluateGuess())
      this.incorrectGuesses.push(turn.card.id)
      // console.log(this.incorrectGuesses)
      return false// , turn.giveFeedback()
    } else {
      return true //, turn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
    console.log('this.turn: ', this.turns)
    console.log('length: ', this.incorrectGuesses.length)
    console.log('this.currentCard: ', this.currentCard)
    return this.turns / this.incorrectGuesses.length
  }
}

module.exports = Round