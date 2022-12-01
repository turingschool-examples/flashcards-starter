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
    this.turns +=1 //correct/incorrect
    console.log('10' , this.deck)
    turn.giveFeedback()
    //if the user guess correct
    //return this.deck
    console.log('4', turn.attempt) 
    if (turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(turn.currentCard.id)
      console.log('2', this.incorrectGuesses)
      console.log('3', turn.giveFeedback())  
    }
    console.log('1' , turn.currentCard)
    return turn.giveFeedback()

    //evaluateGuess

    //change the deck card when they make their guess.

  }
}

module.exports = Round