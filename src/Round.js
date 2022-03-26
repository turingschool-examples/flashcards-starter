const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.currentTurn;
    this.roundEnded = false;
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.returnCurrentCard());
    this.currentTurn = newTurn
    this.turnCount++;
    if(newTurn.guess !== this.deck[0].correctAnswer) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.deck.shift()
     return newTurn.giveFeedback()
  }

  calculatePercentCorrect() {
   let percentage = Math.floor(((this.turnCount * 100) - (this.incorrectGuesses.length * 100)) / this.turnCount) 
   return percentage
  }  

  endRound() {
    console.log(`** Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`) 
    return this.roundEnded = true
  }
}

module.exports = Round;


//next should have a method to take a turn