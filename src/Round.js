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
    let incorrectGuess = turn.evaluateGuess()
    this.currentCard = this.deck.cards[this.turns]
    // console.log('turn.card: ', turn.card)
    console.log('incorrectGuess: ', incorrectGuess);
    if(incorrectGuess) {
      return false
    } else {
      this.incorrectGuesses.push(turn.card.id)
      return true
    }
    
  }

  calculatePercentCorrect() {

  }
}

module.exports = Round