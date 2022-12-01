const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.set
    this.currentCard = deck.set[0]
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(userGuess) {
    const turn = new Turn (userGuess, this.currentCard)
    this.turns += 1

    if (turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(turn.currentCard.id)
    }
    // this.returnCurrentCard()
    this.currentCard = this.deck[this.turns]
    return turn.giveFeedback()

  }

  calculatePercentCorrect(){
    //if correctanswers = (questions array.length / incorrectGuesses array.length )
  }
}

module.exports = Round