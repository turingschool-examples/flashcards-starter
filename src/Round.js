const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.deck
    this.currentCard; 
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    if (!this.currentCard) {
      this.currentCard = this.deck[0]
      this.deck.shift()
    } else {
      this.currentCard = this.deck[0]
      this.deck.shift()
    }


  }
  // }

    

  // this.deck.push(this.deck[0]).unshift()
    
  // if (!this.currentCard) {
  //   this.currentCard = this.deck[0]    
  // }
  // this.deck.unshift(this.deck.splice(this.deck.indexOf(this.currentCard), 1))
  // this.currentCard = this.deck[0]
  takeTurn(guess) {
    this.returnCurrentCard() 
    this.turns++
    let currentTurn = new Turn(guess, this.currentCard)
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentTurn.guess)
      return currentTurn.giveFeedBack()
    } else {
      return currentTurn.giveFeedBack()

    }
  }
}

module.exports = Round