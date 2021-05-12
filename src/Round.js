const Turn = require("../src/Turn.js");

class Round{
  constructor(deck) {
    this.deck = deck
    this.currentCard = this.deck.cards[0]
    this.turns = 0
    this.incorrectGuesses = []

  }

  returnCurrentCard() {

    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++
    let turn = new Turn(guess, this.currentCard)
    let incorrectGuess = turn.evaluateGuess()
    this.currentCard = this.deck.cards[1]
    console.log('turn.card: ', turn.card)
    console.log('incorrectGuess: ', incorrectGuess);
    if(incorrectGuess === true) {
      this.incorrectGuesses.push(turn.card.id)
    }
    
  }

  calculatePercentCorrect() {

  }
}

module.exports = Round