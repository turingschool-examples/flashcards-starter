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
    
    this.currentCard = this.deck[this.turns]
    return turn.giveFeedback()

  }

  calculatePercentCorrect() {
    const correctAnswers = (this.incorrectGuesses.length/this.turns) * 100
    this.endRound()  
    return correctAnswers
  }

  endRound() {
    const correctAnswers = (this.incorrectGuesses.length/this.turns) * 100
    console.log(`You have answered ${correctAnswers}% correct!`)
  }
}

module.exports = Round