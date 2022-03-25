const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.currentTurn;
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
    //  this.feedback = newTurn
     return newTurn.giveFeedback()


// make a new turn variable and assign it to new instance of Turn.
//Make a parameter to take in a guess from the user.
// Update the turn count regardless if it was correct or not.
// Make an if statement to evaluate if turn.guess is not equal to this.deck[0].correct answer
// if not the same you want to push the ID of that card into the incorrect guesses array
// remove the current card (try splice or shift) 
// invoke a helper method to give feedback on if they were correct or incorrect
  }

  calculatePercentCorrect() {
   let percentage = Math.floor(((this.turnCount * 100) - (this.incorrectGuesses * 100)) / this.turnCount) 
   return percentage
  }  

  endRound() {
    return `** Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;


//next should have a method to take a turn