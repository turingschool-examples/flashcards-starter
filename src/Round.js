const Turn = require('../src/Turn');

class Round {
  constructor(deckObj){
    this.deckStack = deckObj
    this.turns = 0
    this.currentCard
    this.userGuess
    this.incorrectGuesses = []
  }
  returnCurrentCard(){
    this.currentCard = this.deckStack.stack[this.turns]
    return this.currentCard
  }
  takeTurn(guess){
    this.currentCard = this.returnCurrentCard()
    this.userTurn = new Turn(guess, this.currentCard);
    console.log("new Turn ins", this.userTurn)
    console.log("turns before", this.turns);
    this.turns++ 
    console.log("turns after",this.turns);
    this.returnCurrentCard()
    this.userTurn.evaluateGuess()
    if(this.userTurn.evaluateGuess() === true){
      this.userTurn.giveFeedback()
    } else {
      this.userTurn.giveFeedback()
      console.log("incorrect before", this.incorrectGuesses)
      this.incorrectGuesses.push(this.currentCard.id)
      console.log("incorrect after", this.incorrectGuesses)
    }
  }
  calculatePercentCorrect(){
    return this.incorrectGuesses.length * 50
  }
  endRound(){
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;