const Turn = require('./Turn')

class Round {
    constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCardIndex = 0
    this.currentCard = this.deck[this.currentCardIndex]
    }

 returnCurrentCard() {
   return this.currentCard 
  }

 takeTurn(guess) { 
   const turn = new Turn(guess, this.currentCard)
    this.turns++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.currentCardIndex++
    if (this.currentCardIndex < this.deck.length) {
      this.currentCard = this.deck[this.currentCardIndex]
    }
    return turn.giveFeedback()

}

calculatePercentCorrect() {
  const totalGuesses = this.turns
  const totalCorrectGuesses = this.turns - this.incorrectGuesses.length
  console.log(totalGuesses)
  return Math.floor((totalCorrectGuesses / totalGuesses) * 100)
}

endRound() {
  const percentCorrect = this.calculatePercentCorrect()
  console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`)
  return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
}
}

 





module.exports = Round;