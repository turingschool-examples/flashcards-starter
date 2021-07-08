const Turn = require('./Turn')
class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCounter = 0
    this.incorrectCards = []
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard() 
    const turn = new Turn(guess, card)
    
    this.turnCounter++
    this.deck.cards.shift()

    // if(turn.guess !== turn.card.correctAnswer) {
    //   this.incorrectCards.push(turn.card)
    // }

    // console.log(turn.evaluateGuess())
  }
}


module.exports = Round 


// takeTurn()
// when a guess is made, a new Turn instance is created (so we'll have access to the properties in the Turn class here)
// add to turn counter (whether it's correct or incorrect)
// shuffle to next card in array (remove first item so that first card is now the next card in the deck)
// evaluate the guess using turn.evaluateGuess() from Turn class
// guess is recorded? we'll need to shovel the cards that are incorrect into an empty array
// return feedback for both correct and incorrect guesses

//calculatePercentCorrect() 
// calculates and returns the percentage of correct guesses
// var correctCards = this.turns - this.incorrectCards.length
// var correctCardsPercentage = correctCards / this.turnCounter * 100

//endRound() 
// return `Round over! You answered ${correctCardsPercentage}% of the questions correctly!`
